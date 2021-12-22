To use apm command, follow this to add apm to your PATH: https://stackoverflow.com/questions/38138900/complete-guide-for-installing-apm-on-windows/41353271

Install package:
- Via website: https://atom.io/packages/barebone-atom-package
- Via Atom: File > Settings > Install > Search "barebone-atom-package" > Install
- Via apm command: apm install barebone-atom-package
- Check if package is installed: try to run package in step 3 "Edit and run instruction"

Edit and run instruction:
1. It's recommended to uninstall this package first before making any edit.
2. Go to C:\Users\<username>\github and clone this repository
3. Reload Atom and try to use package: Ctrl+Shift+I to open devtool > Ctrl+Shift+P > Type and run "barebone:Owo" > see "Owo" in the devtool console
4. Make some edits
5. Reload Atom by open "Command Palette" (Ctrl+Shift+P) > Window Reload
6. See result

Push to Github and update package, in command line, type following:
1. git fetch
2. git status
3. git add .
4. git commit -m "update something"
5. git push
6. (optional) git tag
7. update package in atom site: apm publish major/minor/patch

Publish your package to atom site:
1. Make sure you have requirements for publishing a package (package.json and git tag): https://flight-manual.atom.io/hacking-atom/sections/publishing/
2. Open command line, go to your package folder
3. You may need to connect with your atom account via apm command
4. Change git local user (remove --global tag): https://stackoverflow.com/questions/22844806/how-to-change-my-git-username-in-terminal
5. Make sure your github repository branch is "master", not "main" (https://github.com/atom/apm/issues/933)
6. Type "apm publish major/minor/patch" (see more at https://flight-manual.atom.io/hacking-atom/sections/publishing/)

Uninstall package:
- Via Atom: File > Settings > Packages > Search "barebone-atom-package" > Uninstall
- Via apm command: apm uninstall barebone-atom-package
