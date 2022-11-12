// const ApiError = require('../error/ApiError')
// const bcrypt = require('bcrypt')
const { User } = require('../models/models')
const usersList = [
   {
      id: 1,
      fullName: "Nikolay",
      avatar: "https://i1.sndcdn.com/artworks-000185565305-uarnpx-t500x500.jpg",
      status: "Green",
      location: {
         country: "Ukraine",
         city: "Zhovti Vodyi"
      },
      age: "22",
      contacts: {
         instagram: "@instaa",
         twitter: "@w_s",
         telegram: "@tel_s"
      },
      followed: true
   },
   {
      id: 2,
      fullName: "Nikita",
      status: "Green",
      location: {
         city: "Kyiv",
         country: "Ukraine"
      },
      age: 18,
      contacts: {
         instagram: "@inst_kol",
         twitter: "@w_kol",
         telegram: "@tel_kol"
      },
      followed: false
   },
   {
      id: 3,
      fullName: "Yana",
      avatar: "https://scontent.fiev15-1.fna.fbcdn.net/v/t1.18169-9/10480620_510162065778072_5757080448610267899_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=174925&_nc_ohc=jzBUy9drvSYAX-GCmJK&_nc_ht=scontent.fiev15-1.fna&oh=00_AT-tplq3a0imb0j3b96u8ftLK26pVsms069QwtkLjDh8GA&oe=62B1E628",
      status: "I will become an engineerr",
      location: {
         city: "Trier",
         country: "German"
      },
      age: 22,
      contacts: {
         instagram: "@inst_yana",
         twitter: "@w_yana",
         telegram: "@tel_yana"
      },
      followed: true
   },
   {
      id: 4,
      fullName: "Leo",
      avatar: "https://www.fototende.com/image/cache/catalog/assets/Uploads/4353fs-600x600.jpg",
      status: "I like fish",
      location: {
         city: "Fishburg",
         country: "Catland"
      },
      age: 2,
      contacts: {
         instagram: "@inst_leo",
         twitter: "@w_leo",
         telegram: "@tel_leo"
      },
      followed: false
   },
   {
      id: 5,
      fullName: "Sania",
      avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ21SZW0Xc-YKb8XLxChAwZxEC0h0f3RlomyA&usqp=CAU",
      status: "Go party!",
      location: {
         city: "Odessa",
         country: "Ukraine"
      },
      age: 20,
      contacts: {
         instagram: "@inst",
         twitter: "@w",
         telegram: "@tel"
      },
      followed: true
   },
   {
      id: 6,
      fullName: "Vlad",
      avatar: "https://ringside24.com/media/cache/82/31/82312860c7dac876079df63d7b4bf7fc.jpg",
      status: "I like vape",
      location: {
         city: "Ternopil",
         country: "Ukraine"
      },
      age: 20,
      contacts: {
         instagram: "@inst",
         twitter: "@w",
         telegram: "@tel"
      },
      followed: false
   },
   {
      id: 7,
      fullName: "Gena",
      avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRV2BPJzTNweLnzq86UDq2JmxKzeFapvG3HG9mP-N7YX8gsHd3dc-av6PRhjnhtkYbF1xU&usqp=CAU",
      status: "Yo",
      location: {
         city: "Cheremyshka",
         country: "Belorysia"
      },
      age: 20,
      contacts: {
         instagram: "@inst",
         twitter: "@w",
         telegram: "@tel"
      },
      followed: true
   },
   {
      id: 8,
      fullName: "Vova",
      avatar: "",
      status: "...",
      location: {
         city: "Cheremyshka",
         country: "Belorysia"
      },
      followed: true
   },
   {
      id: 9,
      fullName: "Jack",
      avatar: "",
      status: "Hi!",
      location: {
         city: "New York",
         country: "USA"
      },
      age: 20,
      contacts: {
         instagram: "@inst",
         twitter: "@w",
         telegram: "@tel"
      },
      followed: true
   },
   {
      id: 10,
      fullName: "Inal",
      avatar: "",
      status: "Hi!",
      location: {
         city: "New York",
         country: "USA"
      },
      age: 20,
      contacts: {
         instagram: "@inst",
         twitter: "@w",
         telegram: "@tel"
      },
      followed: true
   },
   {
      id: 11,
      fullName: "kpi",
      avatar: "",
      status: "Hi!",
      location: {
         city: "",
         country: "USA"
      },
      age: 20,
      contacts: {
         instagram: "@inst",
         twitter: "@w",
         telegram: "@tel"
      },
      followed: true
   },
   {
      id: 12,
      fullName: "Inal",
      avatar: "",
      status: "Hi!",
      location: {
         city: "New York",
         country: "USA"
      },
      age: 20,
      contacts: {
         instagram: "@inst",
         twitter: "@w",
         telegram: "@tel"
      },
      followed: true
   },
   {
      id: 13,
      fullName: "New ac",
      avatar: "",
      status: "Hi!",
      location: {
         city: "New York",
         country: "USA"
      },
      age: 20,
      contacts: {
         instagram: "@inst",
         twitter: "@w",
         telegram: "@tel"
      },
      followed: true
   },
   {
      id: 14,
      fullName: "New ac",
      avatar: "",
      status: "Hi!",
      location: {
         city: "New York",
         country: "USA"
      },
      age: 20,
      contacts: {
         instagram: "@inst",
         twitter: "@w",
         telegram: "@tel"
      },
      followed: true
   },
   {
      id: 15,
      fullName: "fdgdfdg",
      avatar: "",
      status: "dfgdg!",
      location: {
         city: "dgdfg",
         country: "dgdg"
      },
      age: 20,
      contacts: {
         instagram: "@inst",
         twitter: "@w",
         telegram: "@tel"
      },
      followed: false
   }
]
class UserController {
   async getAll(req, res) {
      let { _page, _limit, fullName_like, followed } = req.query

      console.log(_page, _limit, fullName_like, followed);
      _page = _page || 1
      // _limit = _limit || 2
      _limit = 100

      let offset = _page * _limit - _limit

      let users = []

      let followedValue = null

      if (followed && followed === 'true') {
         followedValue = true
      } else if (followed === 'false') {
         followedValue = false
      }

      if (fullName_like && !followed) {
         users = await User.find({ fullName: { $regex: fullName_like, $options: 'i' } }).skip(offset).limit(_limit)
      }
      else if (!fullName_like && followed) {
         users = await User.find({ followed: followedValue }).skip(offset).limit(_limit)
      }
      else if (fullName_like && followed) {
         users = await User.find({ followed: followedValue, fullName: { $regex: fullName_like, $options: 'i' } }).skip(offset).limit(_limit)
      }
      else {
         users = await User.find().skip(offset).limit(_limit)
      }

      return res.json(users)
   }

}

module.exports = new UserController()