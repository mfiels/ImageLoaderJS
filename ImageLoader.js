/**
 * An incredibly simple JavaScript image loader.
 *
 * Sample usage:
 *
 *		// Loading an array of images
 *		ImageLoader.load(['image1.png', 'image2.png', 'image3.png'], function(loaded)) {
 *			// loaded now contains:
 *			//		loaded[0] = Image element for image1.png
 *			//		loaded[1] = Image element for image2.png
 *		};
 *
 *		// Loading a map of images
 *		ImageLoader.load({'image1': 'image1.png', 'image2': 'image2.png'}, function(loaded)) {
 *			// loaded now contains:
 *			//		loaded['image1'] = Image element for image1.png
 *			//		loaded['image2'] = Image element for image2.png
 * 		};
 *
 *		// A root directory for images can be specified with
 *		ImageLoader.root = 'images';
 *
 *		// Now when ImageLoader.load is called image names will be prefixed with 
 *		// 		root plus a trailing slash i.e. image1.png becomes images/image1.png
 *		
 *		// Trailing slashes will only be added to the prefix if needed
 */
;(function(global) {

	// The ImageLoader namespace
	var ImageLoader = {

		/**
		 * Optionally can set an image root, all loaded images will be prefixed with this
		 * image root if it is not null. It doesn't matter if root ends in a trailing slash
		 * or not.
		 */
		root: null,

		/**
		 * Load the images specified by name and call the callback with the loaded images.
		 * @param names
		 *		An array or map of file names. If using an array callback will receive an
		 *		array of loaded images, if using a map callback will receive a map of loaded
		 *		images containing the same keys in the argument map.
		 * @param callback
		 *		A function to call with the loaded images when loading is completed.
		 */
		load: function(names, callback) {
			// Initialize space to hold the loaded images
			var images = names.constructor == Object ? {} : [];
			// Determine how many images need to be loaded
			var toLoad = names.length || Object.keys(names).length;
			// Keep track of how many images have been loaded
			var loaded = 0;

			// Internal function to call when an image is loaded successfully
			var imageLoaded = function() {
				// If every image is loaded and the callback isn't null call the callback
				if (++loaded == toLoad && callback)
					callback(images);
			};

			// File prefix is initially empty
			var prefix = '';

			// If root has been set
			if (this.root) {
				// Ensure root ends with a trailing slash
				if (this.root[this.root.length - 1] != '/')
					this.root += '/';
				// Use root as the prefix
				prefix = this.root;
			}

			// Start loading all of the images
			for (var k in names) {
				images[k] = new Image();
				images[k].src = prefix + names[k];
				images[k].onload = imageLoaded;
			}
		}
	};

	// Expose the ImageLoader namespace to global scope
	global.ImageLoader = ImageLoader;

})(window);