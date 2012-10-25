# ImageLoaderJS

## What is ImageLoaderJS?

ImageLoaderJS is a simple and easy to use batch image loader for JavaScript. It is especially useful for batch loading images to be used when drawing to a canvas.

## Usage

```javascript
// Loading an array of images
ImageLoader.load(['image1.png', 'image2.png', 'image3.png'], function(loaded)) {
	// loaded now contains:
	//		loaded[0] = Image element for image1.png
	//		loaded[1] = Image element for image2.png
};

// Loading a map of images
ImageLoader.load({'image1': 'image1.png', 'image2': 'image2.png'}, function(loaded)) {
	// loaded now contains:
	//		loaded['image1'] = Image element for image1.png
	//		loaded['image2'] = Image element for image2.png
};

// A root directory for images can be specified with
ImageLoader.root = 'images';

// Now when ImageLoader.load is called image names will be prefixed with 
// 		root plus a trailing slash i.e. image1.png becomes images/image1.png

// Trailing slashes will only be added to the prefix if needed
```

## Additional Comments
ImageLoaderJS can be imported in a script tag or with RequireJS.