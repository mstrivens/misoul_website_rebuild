import SunnyDay from './assets/sunny-day.png'
import GrassyField from './assets/grassy-field.png'
import SoulReggae from './assets/soul-reggae.png'
import TonyAllen from './assets/tony-allen.png'
import GordonMac from './assets/gordon-mac.png'
import LindsayWesker from './assets/lindsay-wesker.png'
import BrianPower from './assets/brian-power.png'
import RonnieHerel from './assets/ronnie-herel.png'
import MiSoulFridays from './assets/mi-soul-fridays.png'
import ValentineNight from './assets/valentine-night-special.png'

export const bannerPlayerInfo = [{
  stationTitle: "Mi-Soul", 
  showTitle: "Lindsay Wesker",
  // playerUrl: 'https://mi-soul.com/radioplayer/',
  playerUrl: 'https://securestreams.autopo.st:1186/stream',
  stationNumber: 1
},
{
  stationTitle: "Mi-Grooves", 
  showTitle: "Royal Diedem",
  // playerUrl: 'https://mi-houseradio.com/radio/play',
  playerUrl: 'https://securestreams5.autopo.st:1826/stream',
  stationNumber: 2
}]

export const catalogueGridItems = [
  {
    src: 'https://www.mixcloud.com/widget/iframe/?hide_cover=1&mini=1&feed=%2FFlashman_%2Fa-latin-odyssey-a-conversation-about-food-music-and-culture-in-latin-america%2F',
    image: SunnyDay,
    promoScore: 2
  },
  {
    src: 'https://www.mixcloud.com/widget/iframe/?hide_cover=1&mini=1&feed=%2FFlashman_%2Fny-party-in-a-grassy-field%2F',
    image: GrassyField,
    promoScore: null
  },
  {
    src: "https://www.mixcloud.com/widget/iframe/?hide_cover=1&mini=1&feed=%2FFlashman_%2Fsunny-day-soul-and-reggae%2F",
    image: SoulReggae,
    promoScore: null
  },
  {
    src: "https://www.mixcloud.com/widget/iframe/?hide_cover=1&mini=1&feed=%2FFlashman_%2Fradio-maxi-tribute-to-tony-allen%2F",
    image: TonyAllen,
    promoScore: 1
  }
]

export const promoGridItems = [
  {
    src: "https://www.mixcloud.com/widget/iframe/?hide_cover=1&mini=1&feed=%2FFlashman_%2Fradio-maxi-tribute-to-tony-allen%2F",
    image: TonyAllen,
    promoScore: 1
  },
  {
    src: 'https://www.mixcloud.com/widget/iframe/?hide_cover=1&mini=1&feed=%2FFlashman_%2Fa-latin-odyssey-a-conversation-about-food-music-and-culture-in-latin-america%2F',
    image: SunnyDay,
    promoScore: 2
  }
]

export const residentDjsList = [
  {
    name: "Brian Power",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    schedule: "",
    image: BrianPower,
    timing: "Weekly"
  },
  {
    name: "Ronnie Herel",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    schedule: "",
    image: RonnieHerel,
    timing: "Daily"
  },
  {
    name: "Lindsay Wesker",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", 
    schedule: "",
    image: LindsayWesker,
    timing: "Weekly"
  },
  {
    name: "Gordon Mac",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    schedule: "",
    image: GordonMac,
    timing: "Monthly"
  },
]

export const eventsList = [
  {
    name: "Mi-Soul Friday's @ Boisdale",
    image: MiSoulFridays,
    description: "Every Friday night, you can find Mi-Soul DJ's on rotation downstairs in Boisdale of Canary Wharf, playing the best in soulful music from 7pm-2am. It's free entry, or you can book a table for food and drinks",
    date: '7pm Fridays',
  },
  {
    name: "Love Party",
    image: ValentineNight,
    description: "Valentine night special - Mi-Soul Presents Love Party @ Boisdale Canary Wharf",
    date: '14.02.2023',
  },
]

// export const scheduleObject = {
//   "Monday" : [
//     {
//       time: '01:00 - 07:00',
//       dj: 'Mi-Soul Player',
//       showName: '',
//       description: 'Classics from the vault - non-stop and all-night'
//     },
//     {
//       time: '07:00 - 10:00',
//       dj: 'George Kay',
//       showName: 'Mi-Breakfast',
//       description: ''
//     },
//     {
//       time: '10:00 - 13:00',
//       dj: 'Mike Vitti',
//       showName: 'Mi-Mornings',
//       description: ''
//     },
//     {
//       time: '13:00 - 16:00',
//       dj: 'Craig Williams',
//       showName: 'Mi-Afternoons',
//       description: ''
//     },
//     {
//       time: '16:00 - 19:00',
//       dj: 'Ronnie Herel',
//       showName: 'Mi-Drive',
//       description: ''
//     },
//     {
//       time: '19:00 - 21:00',
//       dj: 'Chrissy T',
//       showName: '',
//       description: ''
//     },
//     {
//       time: '21:00 - 23:00',
//       dj: 'Ronnie Herel',
//       showName: '',
//       description: ''
//     },
//     {
//       time: '23:00 - 01:00',
//       dj: 'Perry Louis',
//       showName: '',
//       description: ''
//     },
//   ],
//   "Tuesday" : [
//     {
//       time: '01:00 - 07:00',
//       dj: 'Mi-Soul Player',
//       showName: '',
//       description: 'Classics from the vault - non-stop and all-night'
//     },
//     {
//       time: '07:00 - 10:00',
//       dj: 'George Kay',
//       showName: 'Mi-Breakfast',
//       description: ''
//     },
//     {
//       time: '10:00 - 13:00',
//       dj: 'Mike Vitti',
//       showName: 'Mi-Mornings',
//       description: ''
//     },
//     {
//       time: '13:00 - 16:00',
//       dj: 'Craig Williams',
//       showName: 'Mi-Afternoons',
//       description: ''
//     },
//     {
//       time: '16:00 - 19:00',
//       dj: 'Ronnie Herel',
//       showName: 'Mi-Drive',
//       description: ''
//     },
//     {
//       time: '19:00 - 21:00',
//       dj: 'Peter Borg',
//       showName: '',
//       description: ''
//     },
//     {
//       time: '21:00 - 23:00',
//       dj: 'Stretch Taylor',
//       showName: '',
//       description: ''
//     },
//     {
//       time: '23:00 - 01:00',
//       dj: 'Danny T',
//       showName: 'Liquid Spirit',
//       description: ''
//     },
//   ],
//   "Wednesday" : [
//     {
//       time: '01:00 - 07:00',
//       dj: 'Mi-Soul Player',
//       showName: '',
//       description: 'Classics from the vault - non-stop and all-night'
//     },
//     {
//       time: '07:00 - 10:00',
//       dj: 'George Kay',
//       showName: 'Mi-Breakfast',
//       description: ''
//     },
//     {
//       time: '10:00 - 13:00',
//       dj: 'Mike Vitti',
//       showName: 'Mi-Mornings',
//       description: ''
//     },
//     {
//       time: '13:00 - 16:00',
//       dj: 'Chris Phillips',
//       showName: 'Mi-Afternoons',
//       description: ''
//     },
//     {
//       time: '16:00 - 19:00',
//       dj: 'Ronnie Herel',
//       showName: 'Mi-Drive',
//       description: ''
//     },
//     {
//       time: '19:00 - 21:00',
//       dj: 'Bob Masters',
//       showName: '',
//       description: ''
//     },
//     {
//       time: '21:00 - 23:00',
//       dj: 'Matt White',
//       showName: '',
//       description: ''
//     },
//     {
//       time: '23:00 - 01:00',
//       dj: 'Keith Lawrence',
//       showName: '',
//       description: ''
//     },
//   ],
//   "Thursday" : [
//     {
//       time: '01:00 - 07:00',
//       dj: 'Mi-Soul Player',
//       showName: '',
//       description: 'Classics from the vault - non-stop and all-night'
//     },
//     {
//       time: '07:00 - 10:00',
//       dj: 'George Kay',
//       showName: 'Mi-Breakfast',
//       description: ''
//     },
//     {
//       time: '10:00 - 13:00',
//       dj: 'Mike Vitti',
//       showName: 'Mi-Mornings',
//       description: ''
//     },
//     {
//       time: '13:00 - 16:00',
//       dj: 'Craig Williams',
//       showName: 'Mi-Afternoons',
//       description: ''
//     },
//     {
//       time: '16:00 - 19:00',
//       dj: 'Ronnie Herel',
//       showName: 'Mi-Drive',
//       description: ''
//     },
//     {
//       time: '19:00 - 21:00',
//       dj: 'Calvin Francis',
//       showName: '',
//       description: ''
//     },
//     {
//       time: '21:00 - 23:00',
//       dj: 'Sy Sez',
//       showName: '',
//       description: ''
//     },
//     {
//       time: '23:00 - 01:00',
//       dj: 'Mickey D',
//       showName: 'Pure Beats & Vibes',
//       description: ''
//     },
//   ],
//   "Friday" : [
//     {
//       time: '01:00 - 07:00',
//       dj: 'Mi-Soul Player',
//       showName: '',
//       description: 'Classics from the vault - non-stop and all-night'
//     },
//     {
//       time: '07:00 - 10:00',
//       dj: 'George Kay',
//       showName: 'Mi-Breakfast',
//       description: ''
//     },
//     {
//       time: '10:00 - 13:00',
//       dj: 'Mike Vitti',
//       showName: 'Mi-Mornings',
//       description: ''
//     },
//     {
//       time: '13:00 - 16:00',
//       dj: 'Janice & Lorraine',
//       showName: 'Mi-Afternoons',
//       description: ''
//     },
//     {
//       time: '16:00 - 19:00',
//       dj: 'Ronnie Herel',
//       showName: 'Mi-Drive',
//       description: ''
//     },
//     {
//       time: '19:00 - 21:00',
//       dj: 'Brandon & Ricky',
//       showName: '',
//       description: ''
//     },
//     {
//       time: '21:00 - 23:00',
//       dj: "Jumpin' Jack Frost",
//       showName: '',
//       description: ''
//     },
//     {
//       time: '23:00 - 01:00',
//       dj: 'Dj Fen',
//       showName: 'The Lovebug...',
//       description: ''
//     },
//   ],
//   "Saturday" : [
//     {
//       time: '01:00 - 04:00',
//       dj: 'Roy The Roach',
//       showName: '',
//       description: 'After Hours'
//     },
//     {
//       time: '04:00 - 07:00',
//       dj: 'Mi-Soul player',
//       showName: '',
//       description: 'Classics from the vault - non-stop and all-night'
//     },
//     {
//       time: '07:00 - 09:00',
//       dj: 'Jon Jules',
//       showName: 'Mi-Weekend',
//       description: ''
//     },
//     {
//       time: '09:00 - 11:00',
//       dj: 'Mastermind',
//       showName: '',
//       description: ''
//     },
//     {
//       time: '11:00 - 13:00',
//       dj: 'Ginger Tony',
//       showName: '',
//       description: ''
//     },
//     {
//       time: '13:00 - 15:00',
//       dj: 'Lindsay Wesker',
//       showName: '',
//       description: ''
//     },
//     {
//       time: '15:00 - 17:00',
//       dj: 'Jigs',
//       showName: 'New & Future',
//       description: ''
//     },
//     {
//       time: '17:00 - 19:00',
//       dj: 'Mike Vitti',
//       showName: '',
//       description: ''
//     },
//     {
//       time: '19:00 - 21:00',
//       dj: 'Michael Gray',
//       showName: '',
//       description: ''
//     },
//     {
//       time: '21:00 - 23:00',
//       dj: 'David Harness',
//       showName: '',
//       description: ''
//     },
//     {
//       time: '23:00 - 01:00',
//       dj: 'Natty B',
//       showName: 'Official Reggae',
//       description: ''
//     },
//   ],
//   "Sunday" : [
//     {
//       time: '01:00 - 04:00',
//       dj: 'Mistri',
//       showName: '',
//       description: ''
//     },
//     {
//       time: '04:00 - 07:00',
//       dj: 'Dave VJ',
//       showName: '',
//       description: 'I Love Music Show'
//     },
//     {
//       time: '07:00 - 10:00',
//       dj: 'Jon Jules',
//       showName: 'Mi-Weekend',
//       description: ''
//     },
//     {
//       time: '10:00 - 13:00',
//       dj: 'The Soul Kitchen',
//       showName: '',
//       description: ''
//     },
//     {
//       time: '13:00 - 15:00',
//       dj: 'Greg Edwards',
//       showName: '',
//       description: ''
//     },
//     {
//       time: '15:00 - 17:00',
//       dj: 'Jazzy B',
//       showName: 'Back 2 Life Show',
//       description: ''
//     },
//     {
//       time: '17:00 - 19:00',
//       dj: 'DJ Bigger',
//       showName: '',
//       description: ''
//     },
//     {
//       time: '19:00 - 21:00',
//       dj: 'Femi Fem',
//       showName: '',
//       description: ''
//     },
//     {
//       time: '21:00 - 23:00',
//       dj: 'James Anthony',
//       showName: '',
//       description: ''
//     },
//     {
//       time: '23:00 - 01:00',
//       dj: "D'Nyce",
//       showName: "Soul'd Out Show",
//       description: ''
//     },
//   ]
// }

const mondaySchedule = [
  {
    time: '01:00 - 07:00',
    dj: 'Mi-Soul Player',
    showName: '',
    description: 'Classics from the vault - non-stop and all-night'
  },
  {
    time: '07:00 - 10:00',
    dj: 'George Kay',
    showName: 'Mi-Breakfast',
    description: ''
  },
  {
    time: '10:00 - 13:00',
    dj: 'Mike Vitti',
    showName: 'Mi-Mornings',
    description: ''
  },
  {
    time: '13:00 - 16:00',
    dj: 'Craig Williams',
    showName: 'Mi-Afternoons',
    description: ''
  },
  {
    time: '16:00 - 19:00',
    dj: 'Ronnie Herel',
    showName: 'Mi-Drive',
    description: ''
  },
  {
    time: '19:00 - 21:00',
    dj: 'Chrissy T',
    showName: '',
    description: ''
  },
  {
    time: '21:00 - 23:00',
    dj: 'Ronnie Herel',
    showName: '',
    description: ''
  },
  {
    time: '23:00 - 01:00',
    dj: 'Perry Louis',
    showName: '',
    description: ''
  },
]

const tuesdaySchedule = [
  {
    time: '01:00 - 07:00',
    dj: 'Mi-Soul Player',
    showName: '',
    description: 'Classics from the vault - non-stop and all-night'
  },
  {
    time: '07:00 - 10:00',
    dj: 'George Kay',
    showName: 'Mi-Breakfast',
    description: ''
  },
  {
    time: '10:00 - 13:00',
    dj: 'Mike Vitti',
    showName: 'Mi-Mornings',
    description: ''
  },
  {
    time: '13:00 - 16:00',
    dj: 'Craig Williams',
    showName: 'Mi-Afternoons',
    description: ''
  },
  {
    time: '16:00 - 19:00',
    dj: 'Ronnie Herel',
    showName: 'Mi-Drive',
    description: ''
  },
  {
    time: '19:00 - 21:00',
    dj: 'Peter Borg',
    showName: '',
    description: ''
  },
  {
    time: '21:00 - 23:00',
    dj: 'Stretch Taylor',
    showName: '',
    description: ''
  },
  {
    time: '23:00 - 01:00',
    dj: 'Danny T',
    showName: 'Liquid Spirit',
    description: ''
  },
]

const wednesdaySchedule = [
  {
    time: '01:00 - 07:00',
    dj: 'Mi-Soul Player',
    showName: '',
    description: 'Classics from the vault - non-stop and all-night'
  },
  {
    time: '07:00 - 10:00',
    dj: 'George Kay',
    showName: 'Mi-Breakfast',
    description: ''
  },
  {
    time: '10:00 - 13:00',
    dj: 'Mike Vitti',
    showName: 'Mi-Mornings',
    description: ''
  },
  {
    time: '13:00 - 16:00',
    dj: 'Chris Phillips',
    showName: 'Mi-Afternoons',
    description: ''
  },
  {
    time: '16:00 - 19:00',
    dj: 'Ronnie Herel',
    showName: 'Mi-Drive',
    description: ''
  },
  {
    time: '19:00 - 21:00',
    dj: 'Bob Masters',
    showName: '',
    description: ''
  },
  {
    time: '21:00 - 23:00',
    dj: 'Matt White',
    showName: '',
    description: ''
  },
  {
    time: '23:00 - 01:00',
    dj: 'Keith Lawrence',
    showName: '',
    description: ''
  },
]

const thursdaySchedule = [
  {
    time: '01:00 - 07:00',
    dj: 'Mi-Soul Player',
    showName: '',
    description: 'Classics from the vault - non-stop and all-night'
  },
  {
    time: '07:00 - 10:00',
    dj: 'George Kay',
    showName: 'Mi-Breakfast',
    description: ''
  },
  {
    time: '10:00 - 13:00',
    dj: 'Mike Vitti',
    showName: 'Mi-Mornings',
    description: ''
  },
  {
    time: '13:00 - 16:00',
    dj: 'Craig Williams',
    showName: 'Mi-Afternoons',
    description: ''
  },
  {
    time: '16:00 - 19:00',
    dj: 'Ronnie Herel',
    showName: 'Mi-Drive',
    description: ''
  },
  {
    time: '19:00 - 21:00',
    dj: 'Calvin Francis',
    showName: '',
    description: ''
  },
  {
    time: '21:00 - 23:00',
    dj: 'Sy Sez',
    showName: '',
    description: ''
  },
  {
    time: '23:00 - 01:00',
    dj: 'Mickey D',
    showName: 'Pure Beats & Vibes',
    description: ''
  },
]

const fridaySchedule = [
  {
    time: '01:00 - 07:00',
    dj: 'Mi-Soul Player',
    showName: '',
    description: 'Classics from the vault - non-stop and all-night'
  },
  {
    time: '07:00 - 10:00',
    dj: 'George Kay',
    showName: 'Mi-Breakfast',
    description: ''
  },
  {
    time: '10:00 - 13:00',
    dj: 'Mike Vitti',
    showName: 'Mi-Mornings',
    description: ''
  },
  {
    time: '13:00 - 16:00',
    dj: 'Janice & Lorraine',
    showName: 'Mi-Afternoons',
    description: ''
  },
  {
    time: '16:00 - 19:00',
    dj: 'Ronnie Herel',
    showName: 'Mi-Drive',
    description: ''
  },
  {
    time: '19:00 - 21:00',
    dj: 'Brandon & Ricky',
    showName: '',
    description: ''
  },
  {
    time: '21:00 - 23:00',
    dj: "Jumpin' Jack Frost",
    showName: '',
    description: ''
  },
  {
    time: '23:00 - 01:00',
    dj: 'Dj Fen',
    showName: 'The Lovebug...',
    description: ''
  },
]

const saturdaySchedule = [
  {
    time: '01:00 - 04:00',
    dj: 'Roy The Roach',
    showName: '',
    description: 'After Hours'
  },
  {
    time: '04:00 - 07:00',
    dj: 'Mi-Soul player',
    showName: '',
    description: 'Classics from the vault - non-stop and all-night'
  },
  {
    time: '07:00 - 09:00',
    dj: 'Jon Jules',
    showName: 'Mi-Weekend',
    description: ''
  },
  {
    time: '09:00 - 11:00',
    dj: 'Mastermind',
    showName: '',
    description: ''
  },
  {
    time: '11:00 - 13:00',
    dj: 'Ginger Tony',
    showName: '',
    description: ''
  },
  {
    time: '13:00 - 15:00',
    dj: 'Lindsay Wesker',
    showName: '',
    description: ''
  },
  {
    time: '15:00 - 17:00',
    dj: 'Jigs',
    showName: 'New & Future',
    description: ''
  },
  {
    time: '17:00 - 19:00',
    dj: 'Mike Vitti',
    showName: '',
    description: ''
  },
  {
    time: '19:00 - 21:00',
    dj: 'Michael Gray',
    showName: '',
    description: ''
  },
  {
    time: '21:00 - 23:00',
    dj: 'David Harness',
    showName: '',
    description: ''
  },
  {
    time: '23:00 - 01:00',
    dj: 'Natty B',
    showName: 'Official Reggae',
    description: ''
  },
]

const sundaySchedule = [
  {
    time: '01:00 - 04:00',
    dj: 'Mistri',
    showName: '',
    description: ''
  },
  {
    time: '04:00 - 07:00',
    dj: 'Dave VJ',
    showName: '',
    description: 'I Love Music Show'
  },
  {
    time: '07:00 - 10:00',
    dj: 'Jon Jules',
    showName: 'Mi-Weekend',
    description: ''
  },
  {
    time: '10:00 - 13:00',
    dj: 'The Soul Kitchen',
    showName: '',
    description: ''
  },
  {
    time: '13:00 - 15:00',
    dj: 'Greg Edwards',
    showName: '',
    description: ''
  },
  {
    time: '15:00 - 17:00',
    dj: 'Jazzy B',
    showName: 'Back 2 Life Show',
    description: ''
  },
  {
    time: '17:00 - 19:00',
    dj: 'DJ Bigger',
    showName: '',
    description: ''
  },
  {
    time: '19:00 - 21:00',
    dj: 'Femi Fem',
    showName: '',
    description: ''
  },
  {
    time: '21:00 - 23:00',
    dj: 'James Anthony',
    showName: '',
    description: ''
  },
  {
    time: '23:00 - 01:00',
    dj: "D'Nyce",
    showName: "Soul'd Out Show",
    description: ''
  },
]

export const scheduleList = [
  {
    day: "Monday",
    date: "2023-01-30",
    schedule: mondaySchedule
  },
  {
    day: "Tuesday",
    date: "2023-01-31",
    schedule: tuesdaySchedule
  },
  {
    day: "Wednesday",
    date: "2023-02-01",
    schedule: wednesdaySchedule
  },
  {
    day: "Thursday",
    date: "2023-02-02",
    schedule: thursdaySchedule
  },
  {
    day: "Friday",
    date: "2023-02-03",
    schedule: fridaySchedule
  },
  {
    day: "Saturday",
    date: "2023-02-04",
    schedule: saturdaySchedule
  },
  {
    day: "Sunday",
    date: "2023-01-29",
    schedule: sundaySchedule
  },
]