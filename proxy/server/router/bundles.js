const { Router } = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const {
  reviewsService, overviewService, relatedItemsService,
} = require('../config/services');

const router = Router();

router.use('/reviewsService.js', createProxyMiddleware({
  target: reviewsService.url,
  pathRewrite: {
    '^/bundles/reviewsService.js': reviewsService.bundle,
  },
  changeOrigin: true,
}));

router.use('/overviewService.js', createProxyMiddleware({
  target: overviewService.url,
  pathRewrite: {
    '^/bundles/overviewService.js': overviewService.bundle,
  },
  changeOrigin: true,
}));

router.use('/relatedItemsService.js', createProxyMiddleware({
  target: relatedItemsService.url,
  pathRewrite: {
    '^/bundles/relatedItemsService.js': relatedItemsService.bundle,
  },
  changeOrigin: true,
}));

// router.use('/service4.js', createProxyMiddleware({
//   target: service4.url,
//   pathRewrite: {
//     '^/bundles/service4.js': service4.bundle,
//   },
//   changeOrigin: true,
// }));

module.exports = router;
