/* Player configs */
let playback = {
  playback: {
    "preload": "none", // "auto"/"none"
    "autoplay": true, // false/true
    "muted": false, // false/true
    "playsinline": true,
    "allowMutedAutoPlay":true, // if autoPlay blocked by browser the video started muted
    "textLanguage": "off",
    //"audioLanguage": "it",
    "streamPriority": [
      {
        "engine": "html5",
        "format": "dash"
      },
      {
        "engine": "html5",
        "format": "hls"
      },
      {
        "engine": "html5",
        "format": "progressive"
      }
    ]
  }
};

let playerConfigOvpQA = {
  logLevel:"DEBUG",
  targetId: 'player',
  provider: {
    partnerId: 1091,
    //partnerId: 4171,
    //partnerId: 198,

    env: {
      cdnUrl: "http://qa-apache-php7.dev.kaltura.com",
      serviceUrl: "https://qa-apache-php7.dev.kaltura.com/api_v3"
    }
  },
  player: playback
};

let playerConfigOvpProd = {
  logLevel:"DEBUG",
  targetId: 'player',
  provider: {
    partnerId: 2222401,
    env: {
      cdnUrl: "https://cdnapisec.kaltura.com",
      serviceUrl: "https://cdnapisec.kaltura.com/api_v3"
    }
  },
  player: playback
};

let playerConfigOTT = {
  logLevel:"DEBUG",
  targetId: 'player',
  provider: {
    partnerId: 198,
    ks: 'djJ8MTk4fMVV1jI1Ivr5HDn5O9lELVl9YdOK1jrGxVFg-MwLizOIMk1HbS9QBE4-XWlShbqSJZzKc4PLGCbiD8d9DsIVqzcdwUUlPg5ol-hgbGkC0Qlq5XYHlNOQrSnyQYx5G20s1SiJXSVdDXo2uAk-KYSiwX8=',
    env: {
      cdnUrl:"https://api-preprod.ott.kaltura.com/v4_7/",
      serviceUrl: "https://api-preprod.ott.kaltura.com/v4_7/api_v3/"
      //serviceUrl: "https://cdnapisec.kaltura.com/api_v3"


    }
  },
  player: playback
};

let playerConfigV18 = {
  logLevel:"DEBUG",
  targetId: 'player',
  provider: {
    partnerId: 225,
    ks: 'djJ8MjI1fBtPewxx2m92hWZvdM2DaP8RkYuI23JyxIzGQummF1TmGZmm6kWwBXBwU2qCb5aAcqp-uW-z3VkXeV8xT4q4AyaSYVU6w2UPttbStZBFpphsDyB95rt1SpV9nLMdChxt4nAPAIOGQLjgUwhmoDR-_LRHXnkXK0px0JAEmaIbYbS_ZqDckzzPeSnK1pvhlq2kDw==',
    env: {
      serviceUrl: "https://rest-as.ott.kaltura.com/v4_4/api_v3"
    }
  },
  player: playback
};


const Env = [
  {
    id:1,fileType:null, playerConfig:playerConfigOvpProd,label:"Production DRM",
    Pid:2222401,
    playerEmbed:"https://qa-apache-php7.dev.kaltura.com/p/1091/sp/109100/embedPlaykitJs/uiconf_id/15212531/partner_id/1091",
    dataSource:[{
      label:"singtel",
      id:"1_f93tepsn"
    },{
      label:"bunny",
      id:"1_m1vpaory"
    }]
  },
  {
    id:2,
    label:"QA Clear",
    playerConfig: playerConfigOvpQA,
    playerEmbed:"https://qa-apache-php7.dev.kaltura.com/p/1091/sp/109100/embedPlaykitJs/uiconf_id/15215908/partner_id/1091",
    Pid:1091,
    dataSource :[{
      label:"Tears of steel",
      id:"0_ttfy4uu0"
    }, {
      label:"Disney - multi audio",
      id:"0_fl4ioobl"
    }, {
      label:"Transformers_5 default captions - default Ger no Eng",
      id:"0_ibls79gu"
    }, {
      label:"The Avengers 2012 - no default no Eng",
      id:"0_1l9q18gy"
    }, {label:"MasterChecf - Long video",
      id:"0_4ktof5po"
    }]
  },
  {
    id:3,
    label:"QA DRM",
    playerEmbed: "//qa-apache-php7.dev.kaltura.com/p/4171/sp/417100/embedPlaykitJs/uiconf_id/15213831/partner_id/4171",
    //	"https://qa-apache-php7.dev.kaltura.com/p/1091/sp/109100/embedPlaykitJs/uiconf_id/15215908/partner_id/1091",
    playerConfig: playerConfigOvpQA,
    Pid:4171,
    dataSource :[{
      label:"test",
      id:"0_4s6xvtx3"
    }, {
      label:"drm2",
      id:"0_2jiaa9tb"
    }]
  },
  {
    id:4,
    label:"OTT",
//    playerEmbed:"https://qa-apache-php7.dev.kaltura.com/p/1091/sp/109100/embedPlaykitJs/uiconf_id/15216616/partner_id/1091",
    playerEmbed:"https://qa-apache-php7.dev.kaltura.com/p/1091/sp/109100/embedPlaykitJs/uiconf_id/15216629/partner_id/1091",
    playerConfig: playerConfigOTT,
    Pid:198,
    dataSource :[{
      label:"OTT1_HLS_VOD_long",
      id:"259153"
    }, {
      label:"OTT1_HLS_VOD",
      id:"258459"
    }, {
      label:"OTT2_UDRM_Dash",
      id:"460627"
    },     { label:"OTT3_Dash",
      id:"437251"
    }]
  },

  {
    id:5,
    label:"OTT V18 PROD",
    fileType: 'DASH_Mobile_SD',
//    playerEmbed:"http://www.kaltura.com/p/1740481/sp/174048100/embedPlaykitJs/uiconf_id/42129631/partner_id/1740481",
//	playerEmbed:"http://www.kaltura.com/p/1740481/sp/174048100/embedPlaykitJs/uiconf_id/42933342/partner_id/1740481",
    playerEmbed:"https://qa-apache-php7.dev.kaltura.com/p/1091/sp/109100/embedPlaykitJs/uiconf_id/15216629/partner_id/1091",
    playerConfig: playerConfigV18,
    Pid:225,
    dataSource :[{
      label:"manish-sonakshi-s-hint-about-alia",
      id:567090
    },
      {label:"kat-wants-alia-to-marry-firs",
        id:565863}]
  },

];


let OTTDataSource =[{
  label:"manish-sonakshi-s-hint-about-alia",
  id:567090
},
  {label:"kat-wants-alia-to-marry-firs",
    id:565863}];

//dataSource = OTTDataSource;
let isOTT = false;
let isOffline;
let currentEntryId;

let kalturaPlayer,downloadManager;
let EnvIndex = 0;
EnvIndex = getParameterByName("env",window.location.href);
if (EnvIndex === undefined || EnvIndex === null) EnvIndex = 0;
let currentEnv = Env.filter(item => item.id == EnvIndex)[0];
if (EnvIndex==5 || EnvIndex==4) {
  isOTT = true;
}
else
{
  isOTT = false;
}
$.getScript(currentEnv.playerEmbed,()=>{
  $("#env-label").html(currentEnv.label);
  downloadManager = new KalturaPlayer.OfflineManager(currentEnv.playerConfig);
  downloadManager.addEventListener('error', function(e){
    $('#errorInput').val(JSON.stringify(e.payload));
  })

  window.addEventListener('offline', function(e) {onlineOfflineHandler(false)});
  window.addEventListener('online', function(e) { onlineOfflineHandler(true) });
  window.addEventListener('beforeunload',function(e){ pauseAll();});
  $('.progress').hide();
  onlineOfflineHandler(navigator.onLine);
  fillData();

  downloadManager.addEventListener("progress", event => {
    let dataIndex = 0;
    currentEnv.dataSource.forEach((data,index)=>{
      if (event.payload.detail.entryId == data.id){
        dataIndex = index;
      }
    })
    $('#progress'+dataIndex).show();
    $('#progress'+dataIndex).width(event.payload.detail.progress + "%");
    console.info("entry: ", event.payload.detail.entryId ,"progress", event.payload.detail.progress);
  })
});


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
      if (isOTT)	{
        downloadManager.getMediaConfig({entryId: currentEntryId,formats:[currentEnv.fileType]}).then( res => {   //for OTT
          downloadManager.download(currentEntryId, {bitrate: 1352287});     //all audio languages will be downloaded
        })
      }
      else
      {
        downloadManager.getMediaConfig({entryId: currentEntryId}).then( res => {								//for OVP
//            downloadManager.download(currentEntryId, {language: "it", bitrate: 712765});    //only the audio language specified wil be downloaded
          downloadManager.download(currentEntryId, {bitrate: 1352287});     //all audio languages will be downloaded
        })
      }
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

$("#getAllDownloads-btn").click(()=>{
  downloadManager.getAllDownloads().then( downloads => {
    const $ul = $('<ul>', {class: "downloadslist"}).append(
      downloads.map(item =>
        $("<li>").append($("<a>").text("entryId: "+item.id + ", state: "+ item.state))
      )
    );
    $(".downloadslist").remove();
    $("#downloadsInput").append($ul);
  });
});


function pauseAll(){
  currentEnv.dataSource.forEach((item)=>{downloadManager.pause(item.id)})
}

function resumeAll(){
  currentEnv.dataSource.forEach((item)=>{downloadManager.resume(item.id)})
}

function fillData(){
  let dropDownItem = $("#dropdown-data-online");
  dropDownItem.empty();
  currentEnv.dataSource.forEach((item,index)=>{
    dropDownItem.append('<a class="dropdown-item" onclick="handleMovie(\''+item.id+'\')">'+item.label+'</a>');
  });
  let dropDownItemOffline = $("#dropdown-data-offline");
  dropDownItemOffline.empty();
  downloadManager.getAllDownloads().then((items)=>{
    items.forEach((item,index)=>{
        dropDownItemOffline.append('<a class="dropdown-item" onclick="handleMovie(\''+item.id+'\',1)">'+(item.metadata && item.metadata.name) || item.id+'</a>');
      }
    )

  })

  let envDD = $("#env-dd");
  envDD.empty();
  Env.forEach((item,index) => {
    envDD.append('<a class="dropdown-item" onclick="handleEnv(\''+item.id+'\')">'+item.label+'</a>');
  })

}

function handleEnv(id){
  window.location.href =  window.location.href.replace(/\?env=.*/ig,"") + "?env=" +id;
}

function handleMovie(entryId,isOffline){
  let playbackItem = currentEnv.dataSource.filter(item => item.id == entryId)[0];
  currentEntryId = playbackItem.id;
  //playerConfig.provider.partnerId = playbackItem.pId;
  if ( !kalturaPlayer )  {
    kalturaPlayer = KalturaPlayer.setup(currentEnv.playerConfig);
  }

  // if (!downloadManager){
  //   downloadManager = new KalturaPlayer.OfflineManager(currentEnv.playerConfig);
  // }
  //if (currentEnv.fileType){															//for OTT - No Need
  //kalturaPlayer.loadMedia({entryId: playbackItem.id,formats:[currentEnv.fileType]});

  //} else {
  if (isOffline){
    downloadManager.getDownloadedMediaConfig('doesnotexists').then(data=>{   //For OTT
//      downloadManager.getDownloadedMediaConfig({entryId: playbackItem.id}).then(data=>{ //For Ovp

      resetandConfigure();
      kalturaPlayer.setMedia(data);

    }).catch(e=>{
      console.error(e);
    });
  } else {
    const mediaInfo = {entryId: playbackItem.id};
    if (currentEnv.fileType){
      mediaInfo.formats = [currentEnv.fileType];
    }
    kalturaPlayer.loadMedia(mediaInfo);
  }

  //}

}

function onlineOfflineHandler(isOnline){
  if (isOnline) {
    //  resumeAll();
    fillData();
    $("#online-alert").show();
    $("#offline-alert").hide();
    $("#download-btn").show();
    $("#pause-btn").show();
    $("#resume-btn").show();
    $("#online-dd").show();
    $("#offline-dd").hide();



  } else {
    pauseAll();
    fillData();
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

function getParameterByName(name, url) {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
    results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}


function resetandConfigure(){
  kalturaPlayer.reset();
  kalturaPlayer.configure({
    playback: {
      streamPriority: [{
        engine: "html5",
        format: "dash"
      }]
    }
  });
}
