// NextJS prevents images from being leaded if they are not whitelisted in next.config.js
// This library helps bypass the prevention by loading the image through a proxy link

import { withImageProxy } from '@blazity/next-image-proxy';

export default withImageProxy({ whitelistedPatterns: [/^https?:\/\/(.*)/] })
