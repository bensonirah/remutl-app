# Create a tsconfig.json

```bash
$ npx tsc --init --rootDir src --outDir build \
--esModuleInterop --resolveJsonModule --lib es6\
--module commonjs --allowJs true --noImplicitAny true
```

**Embed this in a bash script:**

To avoid re-run the command above, simple wrap it inside a bash script
like this:

Create a file named `generate_tsconfig.sh` file then put this inside it:

```bash
#!/bin/bash
set -e
npx tsc --init --rootDir src --outDir build \
--esModuleInterop --resolveJsonModule --lib es6\
--module commonjs --allowJs true --noImplicitAny true
```

Now, make it executable,

```bash
$ chmod +x generate_tsconfig.sh
```

You can now run it in a simply way like this:

```bash
$ ./generate_tsconfig.sh
```
