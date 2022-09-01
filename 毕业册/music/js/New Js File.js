 var text = document.getElementsByClassName("text")[0];
      var i = 0;
      var str =
        "下个秋天，这间教室自然会坐满了人，只是再也不可能是我们。好的坏的都留在那些年啦，这次真的再见咯。毕业了，曾经那些不在意的人和事，现在想来多么珍贵。静谧的天宇，每颗星都有自己的轨迹，让在生活中找到自己的最佳位置，心目中的世界也许会变得和谐而安宁。毕业那天，你像往常一样跟我道别。多年以后，才明白：那天与我道别的，是青春";
      //   console.log(str.length);

      function typing() {
        if (i <= str.length) {
          text.innerHTML = str.substring(0, i++) + "|";
          var timer = setTimeout(typing, 100);
        } else {
          text.innerHTML = str;
          clearTimeout(timer);
        }
      }
	  typing(str);