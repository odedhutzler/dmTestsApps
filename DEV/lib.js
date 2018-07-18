

let OTTDataSource =[{
  label:"manish-sonakshi-s-hint-about-alia",
  id:611579,
  type: "DASH_Mobile_SD"
},
  {label:"1",
    id:468818,
    type: "DASH_Mobile_SD"
  },
{label:"2",
  id:468817,
  type: "DASH_Mobile_SD"
},
  {label:"3",
    id:468816,
    type: "DASH_Mobile_SD"
  },
  {label:"4",
    id:468815,
    type: "DASH_Mobile_SD"
  },
  {label:"5",
    id:468814,
    type: "DASH_Mobile_SD"
  },
  {label:"6",
    id:468813,
    type: "DASH_Mobile_SD"
  },
  {label:"7",
    id:468812,
    type: "DASH_Mobile_SD"
  },
  {label:"8",
    id:468811,
    type: "DASH_Mobile_SD"
  },
  {label:"9",
    id:614613,
    type: "DASH_Mobile_SD"
  },
  {label:"10",
    id:614612,
    type: "DASH_Mobile_SD"
  },
  {label:"11",
    id:614611,
    type: "DASH_Mobile_SD"
  },
  {label:"12",
    id:614610,
    type: "DASH_Mobile_SD"
  },
  {label:"13",
    id:613547,
    type: "DASH_Mobile_SD"
  },
  {label:"14",
    id:613546,
    type: "DASH_Mobile_SD"
  },
  {label:"15",
    id:613545,
    type: "DASH_Mobile_SD"
  },
  {label:"16",
    id:613544,
    type: "DASH_Mobile_SD"
  }
  ];

let dataSource = OTTDataSource;
let isOTT = true;
let isOffline;
let currentEntryId;

let playerConfigOTT = {
  logLevel:"DEBUG",
  targetId: 'player',
  provider: {
    partnerId: 225,
    uiConfId: 41726401,
    env: {
      serviceUrl: "https://rest-as.ott.kaltura.com/v4_4/api_v3"
    }
  },
  player: {
    playback: {
      "preload": "none", // "auto"/"none"
      "autoplay": false, // false/true
      "muted": false, // false/true
      "playsinline": true,
      "allowMutedAutoPlay":true, // if autoPlay blocked by browser the video started muted
      "streamPriority": [
        {
          "engine": "html5",
          "format": "dash"
        }
      ]
    }
  }
};


let kalturaPlayer;
let downloadManager = new KalturaPlayer.OfflineManager(playerConfigOTT);
downloadManager.addEventListener('error', function(e){
  $('#errorInput').val(JSON.stringify(e.payload));
});

let entries = {};


window.addEventListener('offline', function(e) {onlineOfflineHandler(false)});
window.addEventListener('online', function(e) { onlineOfflineHandler(true) });
window.addEventListener('beforeunload',function(e){ pauseAll();});
$('.progress').hide();
onlineOfflineHandler(navigator.onLine);

$("#download-btn").click(()=>{
  downloadManager.getDownloadedMediaConfig(currentEntryId).then(result =>{
    if (result) {
      if (result.state == "paused") {
        downloadManager.resume(currentEntryId);
      }
      if (result.state == "ended") {
        alert("Entry already downloaded :-)")
      }
    } else {
      downloadManager.getMediaConfig({entryId: currentEntryId, formats: ["DASH_Mobile_SD"]}).then(res => {
        entries[currentEntryId] = {progress: 0};
        downloadManager.download(currentEntryId);
      })
    }
  })

});

$("#pause-btn").click(()=>{
  downloadManager.pause(currentEntryId);
});

$("#resume-btn").click(()=>{
  downloadManager.resume(currentEntryId);
});

$("#delete-btn").click(()=>{
  downloadManager.remove(currentEntryId);
});
$("#get-all").click(()=>{
  console.info("get all downloads: ",downloadManager.getAllDownloads());
});

downloadManager.addEventListener("progress", event => {
  entries[event.payload.detail.entryId] = event.payload.detail.progress;
  let progressList = $('ul.progresslist');
  for(let entry in entries){
    progressList.add
  }
  $('#progress').show();
  $('#progress'+dataIndex).width(event.payload.detail.progress + "%");
  console.info("entry: ", event.payload.detail.entryId ,"progress", event.payload.detail.progress);
})

function pauseAll(){
  dataSource.forEach((item)=>{downloadManager.pause(item.id)});
}

function resumeAll(){
  dataSource.forEach((item)=>{downloadManager.resume(item.id)});
}

function fillData(){
  let dropDownItem = $("#dropdown-data-online");
  dropDownItem.empty();
  dataSource.forEach((item,index)=>{
    var elem = document.createElement("a");
    elem.className = 'dropdown-item';
    elem.innerHTML = item.label;
    elem.onclick = function() { handleMovie(item.id); };
    dropDownItem.append(elem);
  });
  let dropDownItemOffline = $("#dropdown-data-offline");
  dropDownItemOffline.empty();
  downloadManager.getAllDownloads().then((items)=>{
    items.forEach((item,index)=>{
        var elem = document.createElement("a");
        elem.className = 'dropdown-item';
        elem.innerHTML = item.metadata && item.metadata.name || item.id;
        elem.onclick = function() { handleMovie(item.id); };
        dropDownItemOffline.append(elem);
      }
    )
  })
}

function handleMovie(playbackEntryId){
  let playbackItem = dataSource.filter((item) => {
    return item.id === playbackEntryId;
  });
  currentEntryId = playbackItem[0].id;
  if ( !kalturaPlayer )  {
    kalturaPlayer = KalturaPlayer.setup(playerConfigOTT);
  }

  if (!downloadManager){
    downloadManager = new KalturaPlayer.OfflineManager(playerConfigOTT);
  }
  if (navigator.onLine){
    if (isOTT){
      resetandConfigure();
      kalturaPlayer.loadMedia({entryId: playbackEntryId},"Web New");

    } else {
      resetandConfigure();
      kalturaPlayer.loadMedia({entryId: playbackEntryId}, {});

    }
  }else {
    if (isOTT){
      downloadManager.getDownloadedMediaConfig({what:"fasd"}).then(data=>{ //playbackEntryId).then(data=>{
        resetandConfigure();
        kalturaPlayer.setMedia(data);
      });
    } else {
      downloadManager.getDownloadedMediaConfig(playbackEntryId).then(data=>{
        resetandConfigure();
        kalturaPlayer.setMedia(data);
      });
    }
  }

}

function resetandConfigure(){
  kalturaPlayer.reset();
  kalturaPlayer.configure({
    playback: {

    }
  });
}

function onlineOfflineHandler(isOnline){
  fillData();
  if (isOnline) {
    $("#online-alert").show();
    $("#offline-alert").hide();
    $("#download-btn").show();
    $("#pause-btn").show();
    $("#resume-btn").show();
    $("#online-dd").show();
    $("#offline-dd").hide();

  } else {
    $("#online-alert").hide();
    $("#offline-alert").show();
    $("#download-btn").hide();
    $("#pause-btn").hide();
    $("#resume-btn").hide();
    $("#online-dd").hide();
    $("#offline-dd").show();

  }
  isOffline = !isOnline;

}
