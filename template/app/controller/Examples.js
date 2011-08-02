/**
 * Controller for inline examples.
 */
Ext.define('Docs.controller.Examples', {
    extend: 'Ext.app.Controller',

    refs: [
        {
            ref: 'tree',
            selector: 'examplestree'
        }
    ],

    init: function() {
        this.control({
            'examplestree': {
                exampleclick: function(url, event) {
                    this.loadExample(url);
                }
            },
            'samplepanel': {
                exampleclick: function(url) {
                    this.loadExample(url);
                }
            }
        });
    },

    loadIndex: function() {
        Ext.getCmp('doctabs').activateTab('#/examples');
        Ext.getCmp('card-panel').layout.setActiveItem('examples');
        Ext.getCmp('tree-container').layout.setActiveItem(1);
        Ext.getCmp('tree-container').show();
    },

    loadExample: function(url, noHistory) {

        if (this.activeUrl === url) return;
        this.activeUrl = url;

        noHistory || Docs.History.push(url);

        Ext.getCmp('card-panel').layout.setActiveItem('example');
        Ext.getCmp('tree-container').layout.setActiveItem(1);

        Ext.get('exampleIframe').dom.setAttribute('src', 'extjs/' + url);
    }
});