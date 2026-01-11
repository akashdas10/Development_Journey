const reelsData = [
  {
    video: "./reels/video1.mp4",
    username: "strawhat_luffy",
    pfp: "https://i.pinimg.com/1200x/27/73/65/27736516e159bc517acd15b68de496e8.jpg",
    follow: true,
    isLiked: true,
    caption: "I want meat",
    likeCount: 1240,
    comment: 89,
    share: 34
  },
  {
    video: "./reels/video2.mp4",    
    username: "swordsman_zoro",
    pfp: "https://i.pinimg.com/736x/9c/a2/9b/9ca29b75d512348a3ea2756b2b6621a5.jpg",
    follow: false,
    isLiked: false,
    caption: "Wanna learn 3 swords style?",
    likeCount: 980,
    comment: 45,
    share: 21
  },
  {
    video: "./reels/video3.mp4",
    username: "navigator_nami",
    pfp: "https://i.pinimg.com/736x/0c/00/53/0c005387cefe22be49693defc108ca91.jpg",
    follow: true,
    isLiked: true,
    caption: "Where is my golds?",
    likeCount: 2100,
    comment: 132,
    share: 56
  },
  {
    video: "./reels/video4.mp4",
    username: "lord_usopp",
    pfp: "https://i.pinimg.com/1200x/81/39/11/8139115f001225ba6f5c971698f7f339.jpg",
    follow: false,
    isLiked: false,
    caption: "I'm the great pirate captain Usopp. Want to hear my story?",
    likeCount: 1560,
    comment: 74,
    share: 29
  },
  {
    video: "./reels/video5.mp4",
    username: "lover_boy_sanji",
    pfp: "https://i.pinimg.com/1200x/04/98/75/049875b394226037a9033b633d5af7b0.jpg",
    follow: true,
    isLiked: true,
    caption: "Hey did you see Nami and Nico? I've made delicious food for them",
    likeCount: 870,
    comment: 38,
    share: 14
  },
  {
    video: "./reels/video6.mp4",
    username: "dr.chopper",
    pfp: "https://i.pinimg.com/736x/4e/e4/1a/4ee41a73dc63cb9dbe7a14209a19e8fc.jpg",
    follow: false,
    isLiked: false,
    caption: "Yes! I'm a reindeer human doctor",
    likeCount: 1940,
    comment: 101,
    share: 47
  },
  {
    video: "./reels/video7.mp4",
    username: "nico_robin",
    pfp: "https://i.pinimg.com/736x/68/5b/6a/685b6a0a7cb16e1dc125abf882844596.jpg",
    follow: true,
    isLiked: true,
    caption: "I can't find my history book. I worder Luffy ate it or not",
    likeCount: 1320,
    comment: 66,
    share: 25
  },
  {
    video: "./reels/video8.mp4",
    username: "uzumaki.naruto",
    pfp: "https://i.pinimg.com/1200x/05/7a/43/057a4337707f62681a92f6584d44bdb7.jpg",
    follow: false,
    isLiked: false,
    caption: "Dattebayo!!!",
    likeCount: 2480,
    comment: 189,
    share: 92
  },
  {
    video: "./reels/video9.mp4",
    username: "the_last_uchiha",
    pfp: "https://i.pinimg.com/736x/6e/37/e5/6e37e5a6cbc5e309c81c443ea397846f.jpg",
    follow: true,
    isLiked: true,
    caption: "These fools are so annoying",
    likeCount: 1100,
    comment: 54,
    share: 18
  },
  {
    video: "./reels/video10.mp4",
    username: "sakura_blooms",
    pfp: "https://i.pinimg.com/1200x/16/87/ef/1687effaf3b1916c9618914555c4f23c.jpg",
    follow: false,
    isLiked: false,
    caption: "Sasuke my love, where are you?",
    likeCount: 1750,
    comment: 97,
    share: 41
  }
];

let allreel = document.querySelector('.reel-container')

function addData(){
    let sum = ''

    reelsData.forEach((elem, idx)=>{
    sum = sum + `<div class="reel">
                    <video src="${elem.video}" autoplay muted loop></video>
                    <div class="all-details">
                        <div class="user-details">
                            <div class="profile">
                                <img src="${elem.pfp}" alt="pfp">
                                <span>${elem.username}</span>
                                <button class="follow" id="${idx}">${elem.follow ? "Unfollow" : "Follow"}</button>
                            </div>
                        </div>
                        <p>${elem.caption}</p>
                    </div>
                    <div class="actions">
                        <div class="interraction-like" id="${idx}">
                            <h5>${elem.isLiked ? '<i class="love ri-heart-3-fill"></i>' : '<i class="ri-heart-3-line"></i>'}</h5>
                            <h6>${elem.likeCount}</h6>
                        </div>
                        <div class="interraction-comment">
                            <h5><i class="ri-chat-3-line"></i></h5>
                            <h6>${elem.comment}</h6>
                        </div>
                        <div class="interraction-share">
                            <h5><i class="ri-share-forward-line"></i></h5>
                            <h6>${elem.share}</h6>
                        </div>
                        <i class="more ri-more-2-fill"></i>
                    </div>
                </div>`

            allreel.innerHTML = sum
    })
}

addData()

allreel.addEventListener('click', (dets)=>{
    if(dets.target.className == 'interraction-like'){
      if(reelsData[dets.target.id].isLiked){
        reelsData[dets.target.id].likeCount--;
        reelsData[dets.target.id].isLiked = false
      }
      else{
        reelsData[dets.target.id].likeCount++;
        reelsData[dets.target.id].isLiked = true
      }
      addData()
    }
    if(dets.target.className == 'follow'){
      if(reelsData[dets.target.id].follow){
        reelsData[dets.target.id].follow = false
      }
      else{
        reelsData[dets.target.id].follow = true
      }
      addData()
    }
  addData()
})