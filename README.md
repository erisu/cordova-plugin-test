<!--
#
# Licensed to the Apache Software Foundation (ASF) under one
# or more contributor license agreements.  See the NOTICE file
# distributed with this work for additional information
# regarding copyright ownership.  The ASF licenses this file
# to you under the Apache License, Version 2.0 (the
# "License"); you may not use this file except in compliance
# with the License.  You may obtain a copy of the License at
#
# http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing,
# software distributed under the License is distributed on an
# "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
#  KIND, either express or implied.  See the License for the
# specific language governing permissions and limitations
# under the License.
#
-->

# mock-cordova-plugin-template

## Release Steps

The follow example below is demostrates a `major` release.
The follow steps can be altered for `minor` or `patch` release.

```bash
npm --no-git-tag-version version major
npm --no-git-tag-version version prerelease --preid=dev
```

### Example Use Cases

If the current version is `0.0.1-dev.0`:
`npm --no-git-tag-version version major` will bump the version to `1.0.0`.

The proceding command bumps the version for `dev` and results as:
`npm --no-git-tag-version version prerelease --preid=dev` resulting in `1.0.1-dev.0`

Continuing from `1.0.1-dev.0`:

If one of the follow commands are executed, these are the outcomes.

- `npm --no-git-tag-version version patch` => `1.0.1`
- `npm --no-git-tag-version version minor` => `1.1.0`
- `npm --no-git-tag-version version major` => `2.0.0`

And as follows, when bumping for dev

- `1.0.2-dev.0`
- `1.1.1-dev.0`
- `2.0.1-dev.0`


###  Under the Covers

- npm controls the bumping of `package.json` and `pacakge-lock.json` (is present).
- version hookscript controls updating various files such as  `plugin.xml`. 
  (Long-term goal is to not require updating other files. Use package.json is golden)
- version hookscript will also commit perform the following git commands in order:
  - IF major/minor/patch bump: `add`, `commit` `tag`, `push` tag, `push` commit
    - Tag will be `draft/target-release-version`
  - IF dev (`prerelease --preid=dev`): `add`, `commit`, `push` commit
