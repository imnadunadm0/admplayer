var player = videojs("example_video_1");
var upcoming_list = $("#plylst_upcming");
var last_video_index = 0;
var playlist = [
  {
    url: "https://voaplus.com/live/tL4Has1RhxZy8vANSC9uQAGc2/index.m3u8",
    thumbnail: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg",
    isLive: true,
    title: "Siyatha",
    length: "",
    playing: true
  },
  {
    url: "https://jk3lz8xklw79-hls-live.5centscdn.com/live/6226f7cbe59e99a90b5cef6f94f966fd.sdp/chunks.m3u8",
    thumbnail: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerJoyrides.jpg",
    isLive: false,
    linkedProducts: [],
    title: "Hiri",
    length: "",
    playing: true
  },
  {
    url: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    thumbnail: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ElephantsDream.jpg",
    isLive: false,
    linkedProducts: [],
    title: "Derana",
    length: "10:53",
    playing: false
  },
  {
    url: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    thumbnail: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerBlazes.jpg",
    isLive: false,
    linkedProducts: [],
    title: "ITN",
    length: "",
    playing: false
  },
  {
    url: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    thumbnail: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerEscapes.jpg",
    isLive: false,
    linkedProducts: [],
    title: "Rupawahini",
    length: "",
    playing: false
  },
  {
    url: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
    thumbnail: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/Sintel.jpg",
    isLive: false,
    linkedProducts: [],
    title: "Eye",
    length: "10:53",
    playing: false
  }
];
player.dimension("width", 1280);
player.dimension("height", 720);

function build_list_item (s) {
  var isLive = s.isLive.toString();
  var length = s.isLive ? "Live":s.length;
  var playing = s.playing.toString();
  var e = $(`<div class="playlist-item-wrapper" data-playing="${playing}" data-live="${isLive}">
<div class="playlist-thumb">
<img src="${s.thumbnail}"/>
<div class="playlist-meta-length"><span>${length}</span></div>
</div>
<div class="playlist-meta">
<div class="playlist-meta-title">${s.title}</div>
</div>
</div>`);
  e.click(i => {
    player.src(s.url);
    playlist[last_video_index].playing = false;
    last_video_index = playlist.indexOf(s);
    playlist[last_video_index].playing = true;
    populate_playlist();
  });
  return e;
}
function populate_list (data, elem) {
  elem.html("");
  for (var item of data) {
    elem.append(build_list_item(item));
  }
}
function populate_playlist () {
  populate_list(playlist, $("#plylst_upcming"));
}
populate_playlist();