import * as fs from 'fs';
import * as path from 'path';

export function fetchSha(env: string): string {
    if (env == 'production') {
        return fetchProdSha();
    }

    return fetchDevSha();
}

function fetchProdSha(): string {
    const activeDeployPath = path.join(__dirname, '../../../deployments/active');
    return fs.readFileSync(activeDeployPath).toString();
}

function fetchDevSha(): string {
    /*
    * https://stackoverflow.com/questions/34518389/get-hash-of-most-recent-git-commit-in-node
    */

    const gitPath = path.join(__dirname, '../../.git');

    const gitHead = path.join(gitPath, 'HEAD');
    const rev = fs.readFileSync(gitHead).toString();
    if (rev.indexOf(':') === -1) {
        return rev;
    } else {
        const gitRev = path.join(gitPath, rev.substring(5).trim());
        return fs
        .readFileSync(gitRev)
        .toString()
        .trim();
    }
}
