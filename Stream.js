/**
 * Represents media stream(audio, video, desktop)
 * @constructor
 */
function Stream()
{

}
/**
 * The media stream from the browser.
 */
Stream.prototype.originalStream;

/**
 * Mutes the stream.
 */
Stream.prototype.mute = function () {

}

/**
 * Unmutes the stream.
 */
Stream.prototype.unmute = function () {

}

/**
 * Attaches the stream to HTML container.
 * @param container the HTML container
 */
Stream.prototype.attachStream = function (container) {

}

/**
 * Removes the stream from the passed HTML container.
 * @param container the HTML container
 */
Stream.prototype.remove = function (container) {

}

/**
 * Stops sending the stream. And removes it from the HTML.
 * NOTE: Works for the local stream only.
 */
Stream.prototype.stop = function () {

}

module.exports = Stream;