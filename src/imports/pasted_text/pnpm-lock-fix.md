The Netlify deploy errored, with the following guidance provided:

Diagnosis
- The dependency install step fails while pnpm is parsing your lockfile: see the install failure at [line 18](#L18) and the YAML parse error at [line 19](#L19).
- The logs show Git merge conflict markers inside the lockfile (e.g. "<<<<<<< HEAD" and "=======" around a prunedAt entry) which breaks YAML parsing: see [line 22](#L22)-[line 24](#L24) and [line 30](#L30)-[line 34](#L34).
- Root cause: pnpm cannot read an invalid/corrupted pnpm-lock.yaml (contains unresolved merge conflict markers), so dependency installation fails and the build stops ([line 45](#L45), [line 46](#L46)).

Relevant log excerpts
- Error while installing dependencies: [line 18](#L18)
- YAML parse error from pnpm: [line 19](#L19)
- Merge conflict markers in lockfile: [line 22](#L22)-[line 24](#L24) and [line 30](#L30)-[line 34](#L34)
- Final install failure: [line 45](#L45)-[line 46](#L46)

Solution
1. Inspect and fix the lockfile
   - Open the repo's pnpm lockfile (likely at pnpm-lock.yaml). You can view it in the repo here:
     https://github.com/Earphonemic/earphonenemic.github.io/blob/main/pnpm-lock.yaml
   - Search for Git conflict markers (<<<<<<, =======, >>>>>>>). Remove them and resolve the conflicts so the YAML is valid. Commit the cleaned file.

2. Alternatively (safe regeneration)
   - Locally, on your machine:
     - Ensure you are on the correct branch and up-to-date:
       ```
       git checkout main
       git pull
       ```
     - Remove the broken lockfile and regenerate it using pnpm (recommended because the build environment is using pnpm):
       ```bash
       rm pnpm-lock.yaml
       pnpm install
       git add pnpm-lock.yaml
       git commit -m "fix: regenerate pnpm-lock.yaml to remove merge conflict"
       git push
       ```
     - If you don’t use pnpm locally, install pnpm (or use corepack) then run pnpm install so the lockfile is created in the same format the build expects.

3. Verify and redeploy
   - Confirm pnpm-lock.yaml (the fixed or regenerated file) is committed and pushed to the repo.
   - Trigger a new Netlify deploy.

Notes
- Do not include unresolved conflict markers in any committed lockfile; CI tools (pnpm) will fail to parse them.
- The build failure is not a Node version mismatch; no Node-version change is required here.
- If you prefer to edit the file manually, be careful to produce valid YAML (no leftover conflict markers) and commit the change before redeploying.

The relevant error logs are:

Line 8: Custom build command detected. Proceeding with the specified command: 'npm install --legacy-peer-deps && npm run build'
Line 9: Installing dependencies
Line 10: mise ~/.config/mise/config.toml tools: python@3.14.3
Line 11: mise ~/.config/mise/config.toml tools: ruby@3.4.8
Line 12: mise ~/.config/mise/config.toml tools: go@1.26.2
Line 13: v20.20.2 is already installed.
Line 14: Now using node v20.20.2 (npm v10.8.2)
Line 15: Enabling Node.js Corepack
Line 16: No pnpm workspaces detected
Line 17: Installing npm packages using pnpm version 10.30.3
Line 18: Failed during stage 'Install dependencies': dependency_installation script returned non-zero exit code: 1
Line 19:  ERROR  can not read a block mapping entry; a multiline key may not be an implicit key (456:9)
Line 20:  453 |   - '@tailwindcss/oxide@4.1.12'
Line 21:  454 |   - esbuild@0.25.10
Line 22:  455 | <<<<<<< HEAD
Line 23:  456 | prunedAt: Fri, 05 Jun 2026 05:01:35 GMT
Line 24: ---------------^
Line 25:  457 | =======
Line 26:  458 | <<<<<<< HEAD
Line 27: pnpm: can not read a block mapping entry; a multiline key may not be an implicit key (456:9)
Line 28:  453 |   - '@tailwindcss/oxide@4.1.12'
Line 29:  454 |   - esbuild@0.25.10
Line 30:  455 | <<<<<<< HEAD
Line 31:  456 | prunedAt: Fri, 05 Jun 2026 05:01:35 GMT
Line 32: ---------------^
Line 33:  457 | =======
Line 34:  458 | <<<<<<< HEAD
Line 35:     at generateError (/opt/buildhome/.cache/node/corepack/v1/pnpm/10.30.3/dist/pnpm.cjs:11368:14)
Line 36:     at throwError (/opt/buildhome/.cache/node/corepack/v1/pnpm/10.30.3/dist/pnpm.cjs:11371:13)
Line 37:     at readBlockMapping (/opt/buildhome/.cache/node/corepack/v1/pnpm/10.30.3/dist/pnpm.cjs:12002:13)
Line 38:     at composeNode (/opt/buildhome/.cache/node/corepack/v1/pnpm/10.30.3/dist/pnpm.cjs:12205:82)
Line 39:     at readDocument (/opt/buildhome/.cache/node/corepack/v1/pnpm/10.30.3/dist/pnpm.cjs:12335:7)
Line 40:     at loadDocuments (/opt/buildhome/.cache/node/corepack/v1/pnpm/10.30.3/dist/pnpm.cjs:12377:9)
Line 41:     at Object.load (/opt/buildhome/.cache/node/corepack/v1/pnpm/10.30.3/dist/pnpm.cjs:12395:23)
Line 42:     at parse2 (/opt/buildhome/.cache/node/corepack/v1/pnpm/10.30.3/dist/pnpm.cjs:13155:33)
Line 43:     at /opt/buildhome/.cache/node/corepack/v1/pnpm/10.30.3/dist/pnpm.cjs:13156:80
Line 44:     at async readModulesManifest (/opt/buildhome/.cache/node/corepack/v1/pnpm/10.30.3/dist/pnpm.cjs:119285:22)
Line 45: Error during pnpm install
Line 46: Failing build: Failed to install dependencies
Line 47: Finished processing build request in 14.104s