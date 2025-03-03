/**
 * View Engine Configuration
 * (sails.config.views)
 *
 * Server-sent views are a secure and effective way to get your app up
 * and running. Views are normally served from actions.  Below, you can
 * configure your templating language/framework of choice and configure
 * Sails' layout support.
 *
 * For details on available options for configuring server-side views, check out:
 * https://sailsjs.com/config/views
 *
 * For more background information on views and partials in Sails, check out:
 * https://sailsjs.com/docs/concepts/views
 */

module.exports.views = {
  extension: 'ejs',

  getRenderContext: async function (req) {
    // Get the userId and other context-specific variables using the helper
    const userContext = await sails.helpers.addUserId(req);

    return userContext;
  },

  layout: 'layouts/layout'

};
