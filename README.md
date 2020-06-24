# Elementis

Front-end useful components in SCSS/JS to re-use in projects.

## Install

1. Clone this repository on your machine.
2. Then run following commands:

    ```bash
    # Install main packages
    npm install
    # Install front-end libraries dependencies
    npm run install:vendors
    ```

    Now you have installed the project dependencies

3. All done!

## Available components

| Components        | Note                                                                      |
| :---------------- | :------------------------------------------------------------------------ |
| core              | Import core dependencies (like _normalize_ and _jquery_)                  |

Note: The component `theme-example` contains _landing_ styles for coming-soon and maintenance pages and _example_ styles used by other components for demo pages/templates.

## Components structure

```
/src/components
    /<component_name>
        /images
        /scripts
        /styles
        /templates
```

## Contribute

You can make your modifications in `./src` folder and add your awesome idea :)

```bash
# Build sources files to destination
npm run build
# Watch modification on sources to build
npm run watch
```

All front-end libraries should be required in this `./src/vendors/package.json` file.

## Change Log

Follow-up the modifications made in [the Change Log](./CHANGELOG.md).

## License

Project released under [the MIT license](./LICENSE).
