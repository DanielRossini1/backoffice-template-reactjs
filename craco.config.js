const CracoLessPlugin = require('craco-less');

module.exports = {
    plugins: [
        {
            plugin: CracoLessPlugin,
            options: {
                lessLoaderOptions: {
                    lessOptions: {
                        modifyVars: {
                            '@primary-color': '#5B2885',
                            '@btn-disable-bg': '@primary-color',
                            '@layout-header-background': 'white',
                            '@layout-trigger-background': '@primary-color'
                        },
                        javascriptEnabled: true,
                    },
                },
            },
        },
    ],
};
