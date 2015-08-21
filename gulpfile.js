var gulp = require("gulp");
var benchmark = require("gulp-benchmark");

gulp.task("benchmark", function() {
	return gulp.src("benchmarks/format.js")
		.pipe(benchmark({}))
});