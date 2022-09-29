const $lyric = document.querySelector(".music__lyric");
const $audio = document.querySelector(".music__audio");

// buat nyimpen elements
// biar gak usah select lagi
const $lines = [];
let $currentLine = null;

const liricle = new Liricle();

liricle.offset = -1500;

liricle.load({ 
      url: "./assets/audios/a.lrc"
});

liricle.on("load", data => {
      data.lines.forEach(line => {
            const $line = document.createElement("div");
            
            $line.className = "music__line";
            $line.innerHTML = line.text;

            $lines.push($line);
            $lyric.append($line);
      });
});

liricle.on("sync", line => {
      if ($currentLine != null) {
            $currentLine.classList.remove("active");
      }

      const $line = $lines[line.index];
      document.documentElement.scrollTop = $line.offsetTop;

      $line.classList.add("active");
      $currentLine = $line;
});

$audio.addEventListener("timeupdate", () => {
      liricle.sync($audio.currentTime);
})
