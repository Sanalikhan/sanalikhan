const songsDataBase = [
  { title: "Shape of You", artist: "Ed Sheeran", uri: "spotify:track:uri1" },
  { title: "Blinding Lights", artist: "The Weeknd", uri: "spotify:track:uri2" },
  { title: "Levitating", artist: "Dua Lipa", uri: "spotify:track:uri3" },
  { title: "Stay", artist: "The Kid LAROI & Justin Bieber", uri: "spotify:track:uri4" },
  { title: "Happier Than Ever", artist: "Billie Eilish", uri: "spotify:track:uri5" },
  { title: "Peaches", artist: "Justin Bieber", uri: "spotify:track:uri6" },
  { title: "Good 4 U", artist: "Olivia Rodrigo", uri: "spotify:track:uri7" },
  { title: "Montero (Call Me By Your Name)", artist: "Lil Nas X", uri: "spotify:track:uri8" },
  { title: "Drivers License", artist: "Olivia Rodrigo", uri: "spotify:track:uri9" },
  { title: "Industry Baby", artist: "Lil Nas X & Jack Harlow", uri: "spotify:track:uri10" },
  { title: "Heat Waves", artist: "Glass Animals", uri: "spotify:track:uri11" },
  { title: "Save Your Tears", artist: "The Weeknd", uri: "spotify:track:uri12" },
  { title: "Bad Habits", artist: "Ed Sheeran", uri: "spotify:track:uri13" },
  { title: "Kiss Me More", artist: "Doja Cat ft. SZA", uri: "spotify:track:uri14" },
  { title: "Permission to Dance", artist: "BTS", uri: "spotify:track:uri15" },
  { title: "Butter", artist: "BTS", uri: "spotify:track:uri16" },
  { title: "My Universe", artist: "Coldplay & BTS", uri: "spotify:track:uri17" },
  { title: "Easy On Me", artist: "Adele", uri: "spotify:track:uri18" },
  { title: "Take My Breath", artist: "The Weeknd", uri: "spotify:track:uri19" },
  { title: "Cold Heart", artist: "Elton John & Dua Lipa", uri: "spotify:track:uri20" },
  { title: "Shivers", artist: "Ed Sheeran", uri: "spotify:track:uri21" },
  { title: "We Don't Talk About Bruno", artist: "Encanto Cast", uri: "spotify:track:uri22" },
  { title: "Woman", artist: "Doja Cat", uri: "spotify:track:uri23" },
  { title: "abcdefu", artist: "GAYLE", uri: "spotify:track:uri24" },
  { title: "Ghost", artist: "Justin Bieber", uri: "spotify:track:uri25" },
  { title: "As It Was", artist: "Harry Styles", uri: "spotify:track:uri26" },
  { title: "Running Up That Hill", artist: "Kate Bush", uri: "spotify:track:uri27" },
  { title: "About Damn Time", artist: "Lizzo", uri: "spotify:track:uri28" },
  { title: "First Class", artist: "Jack Harlow", uri: "spotify:track:uri29" },
  { title: "Sunroof", artist: "Nicky Youre & Dazy", uri: "spotify:track:uri30" },
  { title: "Glimpse of Us", artist: "Joji", uri: "spotify:track:uri31" },
  { title: "Anti-Hero", artist: "Taylor Swift", uri: "spotify:track:uri32" },
  { title: "Unholy", artist: "Sam Smith & Kim Petras", uri: "spotify:track:uri33" },
  { title: "Rich Flex", artist: "Drake & 21 Savage", uri: "spotify:track:uri34" },
  { title: "Golden Hour", artist: "JVKE", uri: "spotify:track:uri35" },
  { title: "Calm Down", artist: "Rema & Selena Gomez", uri: "spotify:track:uri36" },
  { title: "Die For You", artist: "The Weeknd", uri: "spotify:track:uri37" },
  { title: "Lavender Haze", artist: "Taylor Swift", uri: "spotify:track:uri38" },
  { title: "Cuff It", artist: "Beyoncé", uri: "spotify:track:uri39" },
  { title: "I'm Good (Blue)", artist: "David Guetta & Bebe Rexha", uri: "spotify:track:uri40" },
  { title: "Bzrp Music Sessions, Vol. 53", artist: "Shakira & Bizarrap", uri: "spotify:track:uri41" },
  { title: "Kill Bill", artist: "SZA", uri: "spotify:track:uri42" },
  { title: "Until I Found You", artist: "Stephen Sanchez", uri: "spotify:track:uri43" },
  { title: "Escapism.", artist: "RAYE ft. 070 Shake", uri: "spotify:track:uri44" },
  { title: "Made You Look", artist: "Meghan Trainor", uri: "spotify:track:uri45" },
  { title: "Last Christmas", artist: "Wham!", uri: "spotify:track:uri46" },
  { title: "Rockin' Around the Christmas Tree", artist: "Brenda Lee", uri: "spotify:track:uri47" },
  { title: "Jingle Bell Rock", artist: "Bobby Helms", uri: "spotify:track:uri48" },
  { title: "All I Want for Christmas Is You", artist: "Mariah Carey", uri: "spotify:track:uri49" },
  { title: "Feliz Navidad", artist: "José Feliciano", uri: "spotify:track:uri50" },
  { title: "White Christmas", artist: "Bing Crosby", uri: "spotify:track:uri51" },
  { title: "Santa Baby", artist: "Eartha Kitt", uri: "spotify:track:uri52" },
  { title: "Let It Snow! Let It Snow! Let It Snow!", artist: "Dean Martin", uri: "spotify:track:uri53" },
  { title: "It's Beginning to Look a Lot Like Christmas", artist: "Michael Bublé", uri: "spotify:track:uri54" },
  { title: "Happy Xmas (War Is Over)", artist: "John Lennon & Yoko Ono", uri: "spotify:track:uri55" },
  { title: "Winter Wonderland", artist: "Tony Bennett", uri: "spotify:track:uri56" },
  { title: "Baby, It's Cold Outside", artist: "Frank Sinatra", uri: "spotify:track:uri57" },
  { title: "Wonderful Christmastime", artist: "Paul McCartney", uri: "spotify:track:uri58" },
  { title: "Blue Christmas", artist: "Elvis Presley", uri: "spotify:track:uri59" },
  { title: "Have Yourself a Merry Little Christmas", artist: "Judy Garland", uri: "spotify:track:uri60" },
  { title: "The Christmas Song", artist: "Nat King Cole", uri: "spotify:track:uri61" },
  { title: "Do They Know It's Christmas?", artist: "Band Aid", uri: "spotify:track:uri62" },
  { title: "Silver Bells", artist: "Bing Crosby & Carol Richards", uri: "spotify:track:uri63" },
  { title: "Christmas Eve", artist: "Trans-Siberian Orchestra", uri: "spotify:track:uri64" },
  { title: "Holly Jolly Christmas", artist: "Michael Bublé", uri: "spotify:track:uri65" },
  { title: "Carol of the Bells", artist: "Pentatonix", uri: "spotify:track:uri66" },
  { title: "Little Drummer Boy", artist: "Pentatonix", uri: "spotify:track:uri67" },
  { title: "Santa Claus Is Coming to Town", artist: "Bruce Springsteen", uri: "spotify:track:uri68" },
  { title: "Rudolph the Red-Nosed Reindeer", artist: "Gene Autry", uri: "spotify:track:uri69" },
  { title: "Silver and Gold", artist: "Burl Ives", uri: "spotify:track:uri70" },
  { title: "A Holly Jolly Christmas", artist: "Burl Ives", uri: "spotify:track:uri71" },
  { title: "Me and Your Mama", artist: "Childish Gambino", uri: "spotify:track:uri72" },
  { title: "Redbone", artist: "Childish Gambino", uri: "spotify:track:uri73" },
  { title: "This Is America", artist: "Childish Gambino", uri: "spotify:track:uri74" },
  { title: "Awaken, My Love!", artist: "Childish Gambino", uri: "spotify:track:uri75" },
  { title: "Summertime Magic", artist: "Childish Gambino", uri: "spotify:track:uri76" },
  { title: "Feels Like Summer", artist: "Childish Gambino", uri: "spotify:track:uri77" },
  { title: "Stay High", artist: "Childish Gambino", uri: "spotify:track:uri78" },
  { title: "Baby Boy", artist: "Childish Gambino", uri: "spotify:track:uri79" },
  { title: "Sober", artist: "Childish Gambino", uri: "spotify:track:uri80" },
  { title: "Sweatpants", artist: "Childish Gambino", uri: "spotify:track:uri81" },
  { title: "3005", artist: "Childish Gambino", uri: "spotify:track:uri82" },
  { title: "Bonfire", artist: "Childish Gambino", uri: "spotify:track:uri83" },
  { title: "Heartbeat", artist: "Childish Gambino", uri: "spotify:track:uri84" },
  { title: "Telegraph Ave", artist: "Childish Gambino", uri: "spotify:track:uri85" },
  { title: "IV. Sweatpants", artist: "Childish Gambino", uri: "spotify:track:uri86" },
  { title: "III. Urn", artist: "Childish Gambino", uri: "spotify:track:uri87" },
  { title: "The Worst Guys", artist: "Childish Gambino", uri: "spotify:track:uri88" },
  { title: "II. Shadows", artist: "Childish Gambino", uri: "spotify:track:uri89" },
];

export default songsDataBase;