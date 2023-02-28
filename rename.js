const fs = require("fs");
const path = require("path");

fs.readdir("./", (err, files) => {
	files.forEach((file) => {
		const extension = path.extname(file);
		if (extension === ".mp4") {
			const newName = `${file.split("-")[0]}${extension}`;
			// console.log(newName);
			fs.rename(file, newName, (err, out) => {
				if (err) {
					console.log(out, err);
				}
			});
		}
	});
});
