import fs from 'fs';
import glob from 'glob';
import path from 'path';

import {appDist} from '../../shared/config/paths';
import config from '../../config';
import {configSchema} from '../../shared/schema/Config';

const staticAssets = [path.join(appDist, 'index.html')];

// Taken from react-scripts/check-required-files, but without console.logs.
const doFilesExist = (files: Array<string>) => {
  try {
    files.forEach((filename) => {
      fs.accessSync(filename, fs.constants.F_OK);
    });
    return true;
  } catch (err) {
    return false;
  }
};

const grepRecursive = (folder: string, match: string) => {
  return glob.sync(folder.concat('/**/*')).some((file) => {
    try {
      if (!fs.lstatSync(file).isDirectory()) {
        return fs.readFileSync(file, {encoding: 'utf8'}).includes(match);
      }
      return false;
    } catch (error) {
      console.error(`Error reading file: ${file}\n${error}`);
      return false;
    }
  });
};

const enforcePrerequisites = () =>
  new Promise<void>((resolve, reject: (error: Error) => void) => {
    if (!doFilesExist(staticAssets)) {
      reject(new Error(`Static assets (index.html) are missing.`));
      return;
    }

    // Ensures that WebAssembly support is present
    if (typeof WebAssembly === 'undefined') {
      reject(new Error('WebAssembly is not supported in this environment!'));
      return;
    }

    // Ensures that there is a proper configuration
    const result = configSchema.safeParse(config);
    if (!result.success) {
      console.error(result.error.message);
      reject(new Error('Invalid configuration.'));
      return;
    }

    // Ensures that server secret is not served to user
    if (grepRecursive(appDist, config.secret)) {
      reject(new Error(`Secret is included in static assets. Please ensure that secret is unique.`));
      return;
    }

    resolve();
  });

export default enforcePrerequisites;
