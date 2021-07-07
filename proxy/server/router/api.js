/* eslint-disable max-len */
const { Router } = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const {
  reviewsService, overviewService, relatedItemsService,
} = require('../config/services');

const router = Router();

router.use(reviewsService.api, createProxyMiddleware({ target: reviewsService.url, changeOrigin: true }));
router.use(overviewService.api, createProxyMiddleware({ target: overviewService.url, changeOrigin: true }));
router.use(relatedItemsService.api, createProxyMiddleware({ target: relatedItemsService.url, changeOrigin: true }));
// router.use(service4.api, createProxyMiddleware({ target: service4.url, changeOrigin: true }));

module.exports = router;
