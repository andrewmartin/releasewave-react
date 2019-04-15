const store = {
  modal: {
    activeModal: null,
    modalData: null,
  },
  artist: {
    isLoading: false,
    serverError: null,
    items: [],
  },
  release: {
    isLoading: false,
    serverError: null,
    items: [
      {
        id: 9,
        artist_id: null,
        name: 'Letters To Our Former Selves',
        description:
          '<p>Youth Fountain have announced that they will be releasing their highly anticipated debut full-length album, Letters To Our Former Selves, on March 8, 2019 via Pure Noise Records. The band has also shared a brand new video for lead single, "Deadlocked," a brutally honest track about getting stuck in feelings of anxiety and depression. Fans can watch the video, as well as pre-order the album, at <a href="http://smarturl.it/YFLTOFS" target="_blank">smarturl.it/YFLTOFS</a>.&nbsp;&nbsp;</p>\n<p>"Letters to Our Former Selves is a record that holds pieces of the person I have been over the past decade. Within each track, there are impactful moments &amp; experiences captured through lyricism - touching on topics about self-identity issues, isolation, relationships &amp; mental health problems," guitarist Tyler Zanon shares. "I hope it means something to you all."</p>\n<p>He continues: "Our single \'Deadlocked\' is one of the more honest &amp; blunt songs off the record. Feelings revolving around battling with depression and anxiety - It was written a few years back during a super dark place I was in while growing up / coming to terms with my adolescence. Sometimes you feel trapped in those negative spaces and there\'s nothing anyone can do to fix that but yourself."</p>\n',
        release_date: '2019-03-08',
        created_at: '2019-03-20T19:57:22.415Z',
        updated_at: '2019-03-24T03:14:56.926Z',
        image_file_name: 'letters.jpg',
        image_content_type: 'image/jpeg',
        image_file_size: 313435,
        image_updated_at: '2019-03-20T19:57:21.689Z',
        slug: 'letters-to-our-former-selves',
        buy: '',
        short_description:
          '<p><span style="color: rgb(33,37,41);background-color: rgb(254,254,254);font-size: 16px;font-family: proxima-nova, aktiv-grotesk, -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji;">Youth Fountain have announced that they will be releasing their highly anticipated debut full-length album, Letters To Our Former Selves, on March 8, 2019 via Pure Noise Records. The band has also shared a brand new video for lead single, "Deadlocked," a brutally honest track about getting stuck in feelings of anxiety and depression. Fans can watch the video, as well as pre-order the album, at </span><a href="http://smarturl.it/YFLTOFS" target="_blank"><span style="color: rgb(172,30,140);background-color: transparent;font-size: 16px;font-family: proxima-nova, aktiv-grotesk, -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji;">smarturl.it/YFLTOFS</span></a><span style="color: rgb(33,37,41);background-color: rgb(254,254,254);font-size: 16px;font-family: proxima-nova, aktiv-grotesk, -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji;">.  </span></p>\n',
        featured: null,
        image: {
          full:
            '//s3-us-west-2.amazonaws.com/releasewaveweb/releases/images/000/000/009/original/letters.jpg?1553111841',
          thumb:
            '//s3-us-west-2.amazonaws.com/releasewaveweb/releases/images/000/000/009/thumb/letters.jpg?1553111841',
          square:
            '//s3-us-west-2.amazonaws.com/releasewaveweb/releases/images/000/000/009/square/letters.jpg?1553111841',
          large:
            '//s3-us-west-2.amazonaws.com/releasewaveweb/releases/images/000/000/009/large/letters.jpg?1553111841',
        },
        artists: [
          {
            id: 12,
            name: 'Youth Fountain',
            bandcamp: '',
            facebook: 'https://www.facebook.com/youthfountainmusic/',
            spotify: '',
            soundcloud: '',
            created_at: '2019-03-20T19:48:45.534Z',
            updated_at: '2019-03-20T19:54:28.319Z',
            image_file_name: 'youthfountain.jpeg',
            image_content_type: 'image/jpeg',
            image_file_size: 955352,
            image_updated_at: '2019-03-20T19:54:26.925Z',
            slug: 'youth-fountain',
            website: null,
            youtube: null,
            itunes: null,
            twitter: null,
            short_description: null,
            image: {
              full:
                '//s3-us-west-2.amazonaws.com/releasewaveweb/artists/images/000/000/012/original/youthfountain.jpeg?1553111666',
              thumb:
                '//s3-us-west-2.amazonaws.com/releasewaveweb/artists/images/000/000/012/thumb/youthfountain.jpeg?1553111666',
              square:
                '//s3-us-west-2.amazonaws.com/releasewaveweb/artists/images/000/000/012/square/youthfountain.jpeg?1553111666',
              large:
                '//s3-us-west-2.amazonaws.com/releasewaveweb/artists/images/000/000/012/large/youthfountain.jpeg?1553111666',
            },
          },
        ],
        embeds: [
          {
            id: 48,
            content:
              '<iframe width="560" height="315" src="https://www.youtube.com/embed/19A9sSSsblk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
            created_at: '2019-03-24T03:14:57.004Z',
            updated_at: '2019-03-24T03:14:57.004Z',
          },
        ],
      },
      {
        id: 8,
        artist_id: null,
        name: 'The Stars On Your Ceiling',
        description:
          '<p>Sleep In have a new album, The Stars On Your Ceiling, that will be released via Know Hope Records on March 22, 2019.</p>\n',
        release_date: '2019-03-22',
        created_at: '2019-03-20T17:47:25.251Z',
        updated_at: '2019-03-24T03:15:13.682Z',
        image_file_name: 'sleepin-stars-600x600.jpg',
        image_content_type: 'image/jpeg',
        image_file_size: 265182,
        image_updated_at: '2019-03-20T17:47:24.718Z',
        slug: 'the-stars-on-your-ceiling',
        buy: 'https://sleep-in.bandcamp.com/album/the-stars-on-your-ceiling',
        short_description:
          '<p><span style="color: rgb(33,37,41);background-color: rgb(254,254,254);font-size: 16px;font-family: proxima-nova, aktiv-grotesk, -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji;">Sleep In have a new album, The Stars On Your Ceiling, that will be released via Know Hope Records on March 22, 2019.</span></p>\n',
        featured: null,
        image: {
          full:
            '//s3-us-west-2.amazonaws.com/releasewaveweb/releases/images/000/000/008/original/sleepin-stars-600x600.jpg?1553104044',
          thumb:
            '//s3-us-west-2.amazonaws.com/releasewaveweb/releases/images/000/000/008/thumb/sleepin-stars-600x600.jpg?1553104044',
          square:
            '//s3-us-west-2.amazonaws.com/releasewaveweb/releases/images/000/000/008/square/sleepin-stars-600x600.jpg?1553104044',
          large:
            '//s3-us-west-2.amazonaws.com/releasewaveweb/releases/images/000/000/008/large/sleepin-stars-600x600.jpg?1553104044',
        },
        artists: [
          {
            id: 11,
            name: 'Sleep In',
            bandcamp: 'https://sleep-in.bandcamp.com/',
            facebook: 'https://www.facebook.com/sleepinband/',
            spotify:
              'https://open.spotify.com/artist/7k5pDjVawZrHGmRPPR29vO?autoplay=true&v=A',
            soundcloud: '',
            created_at: '2019-03-20T17:43:41.093Z',
            updated_at: '2019-03-23T15:58:58.737Z',
            image_file_name: 'Sleep-In-band-2016.jpg',
            image_content_type: 'image/jpeg',
            image_file_size: 199715,
            image_updated_at: '2019-03-20T17:43:40.508Z',
            slug: 'sleep-in',
            website: '',
            youtube: '',
            itunes: '',
            twitter: 'https://twitter.com/sleepinband?lang=en',
            short_description: null,
            image: {
              full:
                '//s3-us-west-2.amazonaws.com/releasewaveweb/artists/images/000/000/011/original/Sleep-In-band-2016.jpg?1553103820',
              thumb:
                '//s3-us-west-2.amazonaws.com/releasewaveweb/artists/images/000/000/011/thumb/Sleep-In-band-2016.jpg?1553103820',
              square:
                '//s3-us-west-2.amazonaws.com/releasewaveweb/artists/images/000/000/011/square/Sleep-In-band-2016.jpg?1553103820',
              large:
                '//s3-us-west-2.amazonaws.com/releasewaveweb/artists/images/000/000/011/large/Sleep-In-band-2016.jpg?1553103820',
            },
          },
        ],
        embeds: [
          {
            id: 49,
            content:
              '<iframe style="border: 0; width: 350px; height: 470px;" src="https://bandcamp.com/EmbeddedPlayer/album=419050648/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" seamless><a href="http://sleep-in.bandcamp.com/album/the-stars-on-your-ceiling">The Stars On Your Ceiling by Sleep In.</a></iframe>',
            created_at: '2019-03-24T03:15:13.730Z',
            updated_at: '2019-03-24T03:15:13.730Z',
          },
        ],
      },
      {
        id: 17,
        artist_id: null,
        name: 'The Longest Lonesome',
        description:
          '<p style="text-align:justify;">Canadian melodic post-hardcore band RARITY are set to drop their sophomore LP on March 29th, 2019. The 11 track album was produced, engineered, and mixed by Sam Guaiana at Room 21 Sound in Toronto. Below you will find the official video for \'Shawinigan\', the latest single from the new LP.</p>\n',
        release_date: '2019-03-29',
        created_at: '2019-03-26T22:11:45.577Z',
        updated_at: '2019-03-28T23:26:52.989Z',
        image_file_name: 'rarity-the-longest-lonesome-music-review-punk-rock-theory.jpg',
        image_content_type: 'image/jpeg',
        image_file_size: 41654,
        image_updated_at: '2019-03-26T22:11:45.137Z',
        slug: 'the-longest-lonesome',
        buy: 'https://itunes.apple.com/us/album/the-longest-lonesome/1454055141',
        short_description: '',
        featured: true,
        image: {
          full:
            '//s3-us-west-2.amazonaws.com/releasewaveweb/releases/images/000/000/017/original/rarity-the-longest-lonesome-music-review-punk-rock-theory.jpg?1553638305',
          thumb:
            '//s3-us-west-2.amazonaws.com/releasewaveweb/releases/images/000/000/017/thumb/rarity-the-longest-lonesome-music-review-punk-rock-theory.jpg?1553638305',
          square:
            '//s3-us-west-2.amazonaws.com/releasewaveweb/releases/images/000/000/017/square/rarity-the-longest-lonesome-music-review-punk-rock-theory.jpg?1553638305',
          large:
            '//s3-us-west-2.amazonaws.com/releasewaveweb/releases/images/000/000/017/large/rarity-the-longest-lonesome-music-review-punk-rock-theory.jpg?1553638305',
        },
        artists: [
          {
            id: 18,
            name: 'Rarity',
            bandcamp: '',
            facebook: 'https://www.facebook.com/raritytheband/',
            spotify: 'https://open.spotify.com/artist/2EIhbnEc2cvYIAsXXbo9tg',
            soundcloud: '',
            created_at: '2019-03-26T22:04:33.158Z',
            updated_at: '2019-03-26T22:04:33.158Z',
            image_file_name: 'Rarity_-_2015_620-400-2.jpg',
            image_content_type: 'image/jpeg',
            image_file_size: 86365,
            image_updated_at: '2019-03-26T22:04:32.749Z',
            slug: 'rarity',
            website: 'https://www.raritytheband.com/',
            youtube: '',
            itunes: 'https://itunes.apple.com/us/artist/rarity/969603852',
            twitter: 'https://twitter.com/rarityband',
            short_description: null,
            image: {
              full:
                '//s3-us-west-2.amazonaws.com/releasewaveweb/artists/images/000/000/018/original/Rarity_-_2015_620-400-2.jpg?1553637872',
              thumb:
                '//s3-us-west-2.amazonaws.com/releasewaveweb/artists/images/000/000/018/thumb/Rarity_-_2015_620-400-2.jpg?1553637872',
              square:
                '//s3-us-west-2.amazonaws.com/releasewaveweb/artists/images/000/000/018/square/Rarity_-_2015_620-400-2.jpg?1553637872',
              large:
                '//s3-us-west-2.amazonaws.com/releasewaveweb/artists/images/000/000/018/large/Rarity_-_2015_620-400-2.jpg?1553637872',
            },
          },
        ],
        embeds: [
          {
            id: 96,
            content:
              '<iframe width="560" height="315" src="https://www.youtube.com/embed/NCoZvtzA0sE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
            created_at: '2019-03-28T23:26:53.075Z',
            updated_at: '2019-03-28T23:26:53.075Z',
          },
          {
            id: 97,
            content: '',
            created_at: '2019-03-28T23:26:53.087Z',
            updated_at: '2019-03-28T23:26:53.087Z',
          },
        ],
      },
      {
        id: 13,
        artist_id: null,
        name: 'What’s Past Is Prologue',
        description:
          '<p>Free Throw return with their 3rd full length LP, What’s Past is Prologue on March 29, 2019, on Triple Crown Records.  Singer and guitarist Cory Castro said about the record “In the two years since the release of ‘Bear Your Mind’, I’ve learned a lot about myself. From being lost in your struggles, to what it takes to find your way back to a good mentality. ‘What’s Past Is Prologue’ tells that story without holding anything back. I hope you all enjoy it.”&nbsp;</p>\n<p>Video and <a href="http://smarturl.it/freethrow" target="_self">pre-orders are available here</a>.&nbsp;</p>\n',
        release_date: '2019-03-29',
        created_at: '2019-03-22T03:36:44.860Z',
        updated_at: '2019-03-24T03:15:39.038Z',
        image_file_name: 'A1362C55-AA94-41AE-95C8-4607FD77A6C6.jpeg',
        image_content_type: 'image/jpeg',
        image_file_size: 91910,
        image_updated_at: '2019-03-22T03:36:44.369Z',
        slug: 'what-s-past-is-prologue',
        buy: 'http://smarturl.it/freethrow',
        short_description:
          '<p><span style="color: rgb(33,37,41);background-color: rgb(254,254,254);font-size: 16px;font-family: proxima-nova, aktiv-grotesk, -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji;">Free Throw return with their 3rd full length LP, What’s Past is Prologue on March 29, 2019, on Triple Crown Records.</span></p>\n',
        featured: null,
        image: {
          full:
            '//s3-us-west-2.amazonaws.com/releasewaveweb/releases/images/000/000/013/original/A1362C55-AA94-41AE-95C8-4607FD77A6C6.jpeg?1553225804',
          thumb:
            '//s3-us-west-2.amazonaws.com/releasewaveweb/releases/images/000/000/013/thumb/A1362C55-AA94-41AE-95C8-4607FD77A6C6.jpeg?1553225804',
          square:
            '//s3-us-west-2.amazonaws.com/releasewaveweb/releases/images/000/000/013/square/A1362C55-AA94-41AE-95C8-4607FD77A6C6.jpeg?1553225804',
          large:
            '//s3-us-west-2.amazonaws.com/releasewaveweb/releases/images/000/000/013/large/A1362C55-AA94-41AE-95C8-4607FD77A6C6.jpeg?1553225804',
        },
        artists: [
          {
            id: 14,
            name: 'Free Throw',
            bandcamp: 'https://freethrowemo.bandcamp.com',
            facebook: 'https://www.facebook.com/freethrowed/',
            spotify: 'https://open.spotify.com/artist/49b68DLRK5eCbtJf7Xx4Cc',
            soundcloud: '',
            created_at: '2019-03-22T03:31:14.505Z',
            updated_at: '2019-03-22T03:31:14.505Z',
            image_file_name: '477A88D2-810E-418C-A88A-648F950CB2DE.jpeg',
            image_content_type: 'image/jpeg',
            image_file_size: 61011,
            image_updated_at: '2019-03-22T03:31:14.051Z',
            slug: 'free-throw',
            website: null,
            youtube: null,
            itunes: null,
            twitter: null,
            short_description: null,
            image: {
              full:
                '//s3-us-west-2.amazonaws.com/releasewaveweb/artists/images/000/000/014/original/477A88D2-810E-418C-A88A-648F950CB2DE.jpeg?1553225474',
              thumb:
                '//s3-us-west-2.amazonaws.com/releasewaveweb/artists/images/000/000/014/thumb/477A88D2-810E-418C-A88A-648F950CB2DE.jpeg?1553225474',
              square:
                '//s3-us-west-2.amazonaws.com/releasewaveweb/artists/images/000/000/014/square/477A88D2-810E-418C-A88A-648F950CB2DE.jpeg?1553225474',
              large:
                '//s3-us-west-2.amazonaws.com/releasewaveweb/artists/images/000/000/014/large/477A88D2-810E-418C-A88A-648F950CB2DE.jpeg?1553225474',
            },
          },
        ],
        embeds: [],
      },
      {
        id: 12,
        artist_id: null,
        name: 'You Are Ok',
        description:
          '<p>Just days before kicking off their annual 8123 Fest in their home state of Arizona, pop rock veterans The Maine have just announced some major news.</p>\n<p>Coming March 29th, the band will be releasing their seventh full-length album titled You Are OK.</p>\n<p></p>\n',
        release_date: '2019-03-29',
        created_at: '2019-03-22T03:24:45.937Z',
        updated_at: '2019-03-24T03:15:25.432Z',
        image_file_name: 'youareok.png',
        image_content_type: 'image/png',
        image_file_size: 306833,
        image_updated_at: '2019-03-22T03:24:45.102Z',
        slug: 'you-are-ok',
        buy: '',
        short_description:
          '<p><span style="color: rgb(33,37,41);background-color: rgb(254,254,254);font-size: 16px;font-family: proxima-nova, aktiv-grotesk, -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji;">Coming March 29th, the band will be releasing their seventh full-length album titled You Are OK.</span></p>\n',
        featured: null,
        image: {
          full:
            '//s3-us-west-2.amazonaws.com/releasewaveweb/releases/images/000/000/012/original/youareok.png?1553225085',
          thumb:
            '//s3-us-west-2.amazonaws.com/releasewaveweb/releases/images/000/000/012/thumb/youareok.png?1553225085',
          square:
            '//s3-us-west-2.amazonaws.com/releasewaveweb/releases/images/000/000/012/square/youareok.png?1553225085',
          large:
            '//s3-us-west-2.amazonaws.com/releasewaveweb/releases/images/000/000/012/large/youareok.png?1553225085',
        },
        artists: [
          {
            id: 2,
            name: 'The Maine',
            bandcamp: '',
            facebook: 'https://www.facebook.com/themaine/',
            spotify: 'https://open.spotify.com/user/the_maine',
            soundcloud: '',
            created_at: '2019-03-20T03:09:00.937Z',
            updated_at: '2019-03-20T03:09:00.937Z',
            image_file_name: 'The-maine.jpg',
            image_content_type: 'image/jpeg',
            image_file_size: 60587,
            image_updated_at: '2019-03-20T03:09:00.433Z',
            slug: 'the-maine',
            website: null,
            youtube: null,
            itunes: null,
            twitter: null,
            short_description: null,
            image: {
              full:
                '//s3-us-west-2.amazonaws.com/releasewaveweb/artists/images/000/000/002/original/The-maine.jpg?1553051340',
              thumb:
                '//s3-us-west-2.amazonaws.com/releasewaveweb/artists/images/000/000/002/thumb/The-maine.jpg?1553051340',
              square:
                '//s3-us-west-2.amazonaws.com/releasewaveweb/artists/images/000/000/002/square/The-maine.jpg?1553051340',
              large:
                '//s3-us-west-2.amazonaws.com/releasewaveweb/artists/images/000/000/002/large/The-maine.jpg?1553051340',
            },
          },
        ],
        embeds: [],
      },
      {
        id: 3,
        artist_id: null,
        name: 'Morbid Stuff',
        description:
          '<p>Toronto punk outfit PUP have announced their third full-length, Morbid Stuff. The follow-up to 2016’s The Dream Is Over is due out April 5th on the band’s new label, Little Dipper (via Rise Records/BMG).</p>\n<p>PUP recorded the album with producer/mixer Dave Schiffman (Weezer, The Mars Volta) as they dug into lead singer Stefan Babcock’s battle with depression. Fans of the band’s playful look at life’s emotional wasteland need not fret, however, as a press release promises the effort contains “all the fury and celebration you’ve come to know, but rooted in understanding of where that fury comes from.” The guys are still teetering on the precipice of complete desolation with manic joy, they’re just more aware of their footing — a state truly befitting the title, when you think about it.</p>\n',
        release_date: '2019-04-05',
        created_at: '2019-03-20T03:27:56.755Z',
        updated_at: '2019-03-24T21:40:53.243Z',
        image_file_name: 'pup-morbid-stuff.jpg',
        image_content_type: 'image/jpeg',
        image_file_size: 91834,
        image_updated_at: '2019-03-20T03:27:56.086Z',
        slug: 'morbid-stuff',
        buy: '',
        short_description:
          '<p><span style="color: rgb(33,37,41);background-color: rgb(254,254,254);font-size: 16px;font-family: proxima-nova, aktiv-grotesk, -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji;">Toronto punk outfit PUP have announced their third full-length, Morbid Stuff. The follow-up to 2016’s The Dream Is Over is due out April 5th on the band’s new label, Little Dipper (via Rise Records/BMG).</span></p>\n',
        featured: true,
        image: {
          full:
            '//s3-us-west-2.amazonaws.com/releasewaveweb/releases/images/000/000/003/original/pup-morbid-stuff.jpg?1553052476',
          thumb:
            '//s3-us-west-2.amazonaws.com/releasewaveweb/releases/images/000/000/003/thumb/pup-morbid-stuff.jpg?1553052476',
          square:
            '//s3-us-west-2.amazonaws.com/releasewaveweb/releases/images/000/000/003/square/pup-morbid-stuff.jpg?1553052476',
          large:
            '//s3-us-west-2.amazonaws.com/releasewaveweb/releases/images/000/000/003/large/pup-morbid-stuff.jpg?1553052476',
        },
        artists: [
          {
            id: 9,
            name: 'Pup',
            bandcamp: '',
            facebook: 'https://www.facebook.com/puptheband/',
            spotify:
              'https://open.spotify.com/artist/6A7uqgC2N1nUhrCLAytHxN?autoplay=true&v=A',
            soundcloud: '',
            created_at: '2019-03-20T03:16:10.900Z',
            updated_at: '2019-03-20T03:16:10.900Z',
            image_file_name: 'pup.jpg',
            image_content_type: 'image/jpeg',
            image_file_size: 84032,
            image_updated_at: '2019-03-20T03:16:10.392Z',
            slug: 'pup',
            website: null,
            youtube: null,
            itunes: null,
            twitter: null,
            short_description: null,
            image: {
              full:
                '//s3-us-west-2.amazonaws.com/releasewaveweb/artists/images/000/000/009/original/pup.jpg?1553051770',
              thumb:
                '//s3-us-west-2.amazonaws.com/releasewaveweb/artists/images/000/000/009/thumb/pup.jpg?1553051770',
              square:
                '//s3-us-west-2.amazonaws.com/releasewaveweb/artists/images/000/000/009/square/pup.jpg?1553051770',
              large:
                '//s3-us-west-2.amazonaws.com/releasewaveweb/artists/images/000/000/009/large/pup.jpg?1553051770',
            },
          },
        ],
        embeds: [
          {
            id: 60,
            content:
              '<iframe width="560" height="315" src="https://www.youtube.com/embed/EqTNdUOE1wo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
            created_at: '2019-03-24T21:40:53.283Z',
            updated_at: '2019-03-24T21:40:53.283Z',
          },
        ],
      },
      {
        id: 11,
        artist_id: null,
        name: 'Interview Music',
        description:
          '<p>Idlewild have announced their first album in four years with ‘Interview Music’, as well sharing their first single ‘Dream Variations’. Their second single drops March 22nd. The Scottish indie rockers will release their eighth album on April 5, 2019. Listen to the single and <a href="https://orcd.co/interviewmusic" target="_self">pre-order the album here</a> .&nbsp;</p>\n',
        release_date: '2019-04-05',
        created_at: '2019-03-22T02:28:18.446Z',
        updated_at: '2019-03-22T02:32:52.946Z',
        image_file_name: '4259C736-471F-402C-B352-426F02F3D4F5.jpeg',
        image_content_type: 'image/jpeg',
        image_file_size: 47584,
        image_updated_at: '2019-03-22T02:28:17.977Z',
        slug: 'interview-music',
        buy: null,
        short_description: null,
        featured: null,
        image: {
          full:
            '//s3-us-west-2.amazonaws.com/releasewaveweb/releases/images/000/000/011/original/4259C736-471F-402C-B352-426F02F3D4F5.jpeg?1553221697',
          thumb:
            '//s3-us-west-2.amazonaws.com/releasewaveweb/releases/images/000/000/011/thumb/4259C736-471F-402C-B352-426F02F3D4F5.jpeg?1553221697',
          square:
            '//s3-us-west-2.amazonaws.com/releasewaveweb/releases/images/000/000/011/square/4259C736-471F-402C-B352-426F02F3D4F5.jpeg?1553221697',
          large:
            '//s3-us-west-2.amazonaws.com/releasewaveweb/releases/images/000/000/011/large/4259C736-471F-402C-B352-426F02F3D4F5.jpeg?1553221697',
        },
        artists: [
          {
            id: 13,
            name: 'Idlewild',
            bandcamp: '',
            facebook: 'https://www.facebook.com/IdlewildTheBand/',
            spotify: 'https://open.spotify.com/artist/1xdB9gS1NrKEYgZUEfoqIw',
            soundcloud: 'https://soundcloud.com/idlewildtheband',
            created_at: '2019-03-22T02:18:25.036Z',
            updated_at: '2019-03-22T02:18:25.036Z',
            image_file_name: '32F93992-81E9-4C4B-AB66-32AF0106DDF8.jpeg',
            image_content_type: 'image/jpeg',
            image_file_size: 65287,
            image_updated_at: '2019-03-22T02:18:24.638Z',
            slug: 'idlewild',
            website: null,
            youtube: null,
            itunes: null,
            twitter: null,
            short_description: null,
            image: {
              full:
                '//s3-us-west-2.amazonaws.com/releasewaveweb/artists/images/000/000/013/original/32F93992-81E9-4C4B-AB66-32AF0106DDF8.jpeg?1553221104',
              thumb:
                '//s3-us-west-2.amazonaws.com/releasewaveweb/artists/images/000/000/013/thumb/32F93992-81E9-4C4B-AB66-32AF0106DDF8.jpeg?1553221104',
              square:
                '//s3-us-west-2.amazonaws.com/releasewaveweb/artists/images/000/000/013/square/32F93992-81E9-4C4B-AB66-32AF0106DDF8.jpeg?1553221104',
              large:
                '//s3-us-west-2.amazonaws.com/releasewaveweb/artists/images/000/000/013/large/32F93992-81E9-4C4B-AB66-32AF0106DDF8.jpeg?1553221104',
            },
          },
        ],
        embeds: [
          {
            id: 22,
            content:
              '<iframe width="560" height="315" src="https://www.youtube.com/embed/wTxuSAwQvsU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
            created_at: '2019-03-22T02:35:42.734Z',
            updated_at: '2019-03-22T02:35:42.734Z',
          },
        ],
      },
      {
        id: 4,
        artist_id: null,
        name: 'The Ceiling',
        description:
          '<p>Birmingham trio Jaws return with their forthcoming third album The Ceiling, which will be released on April 5th 2019.  The album was once again recorded with Gethin Pearson who also worked on their previous and spectacular album Simplicity (2016). Listen to the first three singles Driving At Night, Do You Remember, and Fear below. The three songs showcase classic Jaws while still offering diversity and some new exploration and experimentation as well.&nbsp;</p>\n',
        release_date: '2019-04-05',
        created_at: '2019-03-20T03:30:06.581Z',
        updated_at: '2019-04-04T15:07:43.393Z',
        image_file_name: 'jaws-the-ceiling.jpg',
        image_content_type: 'image/jpeg',
        image_file_size: 129325,
        image_updated_at: '2019-03-20T03:30:05.961Z',
        slug: 'the-ceiling',
        buy: 'https://ffm.to/theceiling',
        short_description:
          '<p><span style="color: rgb(33,37,41);background-color: rgb(254,254,254);font-size: 16px;font-family: proxima-nova, aktiv-grotesk, -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji;">Birmingham trio Jaws return with their forthcoming third album The Ceiling, which will be released on April 5th 2019. </span></p>\n',
        featured: true,
        image: {
          full:
            '//s3-us-west-2.amazonaws.com/releasewaveweb/releases/images/000/000/004/original/jaws-the-ceiling.jpg?1553052605',
          thumb:
            '//s3-us-west-2.amazonaws.com/releasewaveweb/releases/images/000/000/004/thumb/jaws-the-ceiling.jpg?1553052605',
          square:
            '//s3-us-west-2.amazonaws.com/releasewaveweb/releases/images/000/000/004/square/jaws-the-ceiling.jpg?1553052605',
          large:
            '//s3-us-west-2.amazonaws.com/releasewaveweb/releases/images/000/000/004/large/jaws-the-ceiling.jpg?1553052605',
        },
        artists: [
          {
            id: 8,
            name: 'JAWS',
            bandcamp: '',
            facebook: 'https://www.facebook.com/JAWSJAWSJAWSJAWS/',
            spotify:
              'https://open.spotify.com/artist/3E3NOIlw2s1ZPU9GRB9jaq?autoplay=true&v=A',
            soundcloud: '',
            created_at: '2019-03-20T03:15:16.571Z',
            updated_at: '2019-03-24T00:23:32.927Z',
            image_file_name: 'jaws.jpg',
            image_content_type: 'image/jpeg',
            image_file_size: 120679,
            image_updated_at: '2019-03-20T03:15:16.014Z',
            slug: 'jaws',
            website: 'http://www.jawsjawsjaws.co.uk/',
            youtube: '',
            itunes: '',
            twitter: 'https://twitter.com/JAWSJAWSJAWSSS',
            short_description: null,
            image: {
              full:
                '//s3-us-west-2.amazonaws.com/releasewaveweb/artists/images/000/000/008/original/jaws.jpg?1553051716',
              thumb:
                '//s3-us-west-2.amazonaws.com/releasewaveweb/artists/images/000/000/008/thumb/jaws.jpg?1553051716',
              square:
                '//s3-us-west-2.amazonaws.com/releasewaveweb/artists/images/000/000/008/square/jaws.jpg?1553051716',
              large:
                '//s3-us-west-2.amazonaws.com/releasewaveweb/artists/images/000/000/008/large/jaws.jpg?1553051716',
            },
          },
        ],
        embeds: [
          {
            id: 98,
            content:
              '<iframe width="560" height="315" src="https://www.youtube.com/embed/DtLVG782q9A" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
            created_at: '2019-04-04T15:07:43.466Z',
            updated_at: '2019-04-04T15:07:43.466Z',
          },
          {
            id: 99,
            content:
              '<iframe width="560" height="315" src="https://www.youtube.com/embed/F7jDsMJrvFg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
            created_at: '2019-04-04T15:07:43.481Z',
            updated_at: '2019-04-04T15:07:43.481Z',
          },
          {
            id: 100,
            content:
              '<iframe width="560" height="315" src="https://www.youtube.com/embed/qbkeTVAETts" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
            created_at: '2019-04-04T15:07:43.496Z',
            updated_at: '2019-04-04T15:07:43.496Z',
          },
        ],
      },
      {
        id: 2,
        artist_id: null,
        name: 'Steady Glow',
        description:
          "<p><span style=\"color: rgb(33,37,41);background-color: rgb(254,254,254);font-size: 16px;\">In Her Own Words have announced their 2nd LP, Steady Glow, as a follow up to their well received debut 'Unfamiliar'. The California natives have set a release date of April 12th, 2019. The band will be bringing their accessible brand of melodic and emotive pop punk to Europe this April with Stand Atlantic after finishing up a West Coast tour with Oh Weatherly. Both new singles including the title track 'Stead Glow' from the forthcoming LP can be heard below.</span></p>\n",
        release_date: '2019-04-12',
        created_at: '2019-03-20T03:25:40.696Z',
        updated_at: '2019-03-25T21:24:20.185Z',
        image_file_name: 'steady-glow.jpg',
        image_content_type: 'image/jpeg',
        image_file_size: 34543,
        image_updated_at: '2019-03-20T03:25:40.249Z',
        slug: 'steady-glow',
        buy: 'https://invoguerecords.merchnow.com/',
        short_description:
          '<p><span style="color: rgb(33,37,41);background-color: rgb(254,254,254);font-size: 16px;font-family: proxima-nova, aktiv-grotesk, -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji;">In Her Own Words have announced their 2nd LP, Steady Glow, as a follow up to their well received debut \'Unfamiliar\'. The California natives have set a release date of April 12th, 2019. The band will be bringing their accessible brand of melodic and emotive pop punk to Europe this April with Stand Atlantic after finishing up a West Coast tour with Oh Weatherly.</span></p>\n',
        featured: true,
        image: {
          full:
            '//s3-us-west-2.amazonaws.com/releasewaveweb/releases/images/000/000/002/original/steady-glow.jpg?1553052340',
          thumb:
            '//s3-us-west-2.amazonaws.com/releasewaveweb/releases/images/000/000/002/thumb/steady-glow.jpg?1553052340',
          square:
            '//s3-us-west-2.amazonaws.com/releasewaveweb/releases/images/000/000/002/square/steady-glow.jpg?1553052340',
          large:
            '//s3-us-west-2.amazonaws.com/releasewaveweb/releases/images/000/000/002/large/steady-glow.jpg?1553052340',
        },
        artists: [
          {
            id: 6,
            name: 'In Her Own Words',
            bandcamp: '',
            facebook: 'https://www.facebook.com/ihowband/',
            spotify:
              'https://open.spotify.com/artist/3NBHNlkwYabSLvnisILPSI?autoplay=true&v=A',
            soundcloud: '',
            created_at: '2019-03-20T03:13:44.287Z',
            updated_at: '2019-03-25T21:18:18.134Z',
            image_file_name: 'inherownwords.jpg',
            image_content_type: 'image/jpeg',
            image_file_size: 55989,
            image_updated_at: '2019-03-20T03:13:43.639Z',
            slug: 'in-her-own-words',
            website: 'https://www.ihowmerch.com/',
            youtube: '',
            itunes: '',
            twitter: '',
            short_description: null,
            image: {
              full:
                '//s3-us-west-2.amazonaws.com/releasewaveweb/artists/images/000/000/006/original/inherownwords.jpg?1553051623',
              thumb:
                '//s3-us-west-2.amazonaws.com/releasewaveweb/artists/images/000/000/006/thumb/inherownwords.jpg?1553051623',
              square:
                '//s3-us-west-2.amazonaws.com/releasewaveweb/artists/images/000/000/006/square/inherownwords.jpg?1553051623',
              large:
                '//s3-us-west-2.amazonaws.com/releasewaveweb/artists/images/000/000/006/large/inherownwords.jpg?1553051623',
            },
          },
        ],
        embeds: [
          {
            id: 73,
            content:
              '<iframe width="560" height="315" src="https://www.youtube.com/embed/Q6P4-tl7p-k" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
            created_at: '2019-03-25T21:24:20.252Z',
            updated_at: '2019-03-25T21:24:20.252Z',
          },
          {
            id: 74,
            content:
              '<iframe width="560" height="315" src="https://www.youtube.com/embed/zdbjEjgrNV8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
            created_at: '2019-03-25T21:24:20.267Z',
            updated_at: '2019-03-25T21:24:20.267Z',
          },
          {
            id: 75,
            content: '',
            created_at: '2019-03-25T21:24:20.281Z',
            updated_at: '2019-03-25T21:24:20.281Z',
          },
        ],
      },
      {
        id: 18,
        artist_id: null,
        name: "You Swear It's Getting Better Every Day",
        description:
          '<p>Kayak Jones will <span style="color: rgb(33,37,41);background-color: rgb(254,254,254);font-size: 16px;">independently </span>release their debut LP ‘You Swear It’s Getting Better Every Day’ on April 19th. The new single “The Mess I’ve Made” is available on all streaming platforms and can be streamed below.</p>\n',
        release_date: '2019-04-19',
        created_at: '2019-03-27T16:32:14.827Z',
        updated_at: '2019-03-27T16:34:42.811Z',
        image_file_name: 'KJ.jpg',
        image_content_type: 'image/jpeg',
        image_file_size: 72170,
        image_updated_at: '2019-03-27T16:32:14.092Z',
        slug: 'you-swear-it-s-getting-better-every-day',
        buy: 'https://kayakjones.limitedrun.com/',
        short_description:
          '<p><span style="color: rgb(33,37,41);background-color: rgb(254,254,254);font-size: 16px;font-family: proxima-nova, aktiv-grotesk, -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji;">Kayak Jones will independently release their debut LP ‘You Swear It’s Getting Better Every Day’ on April 19th. The new single “The Mess I’ve Made” is available on all streaming platforms and can be streamed below.</span></p>\n',
        featured: true,
        image: {
          full:
            '//s3-us-west-2.amazonaws.com/releasewaveweb/releases/images/000/000/018/original/KJ.jpg?1553704334',
          thumb:
            '//s3-us-west-2.amazonaws.com/releasewaveweb/releases/images/000/000/018/thumb/KJ.jpg?1553704334',
          square:
            '//s3-us-west-2.amazonaws.com/releasewaveweb/releases/images/000/000/018/square/KJ.jpg?1553704334',
          large:
            '//s3-us-west-2.amazonaws.com/releasewaveweb/releases/images/000/000/018/large/KJ.jpg?1553704334',
        },
        artists: [
          {
            id: 19,
            name: 'Kayak Jones',
            bandcamp: 'https://kayakjones.bandcamp.com/',
            facebook: 'https://www.facebook.com/kayakjonesIA/',
            spotify: 'https://open.spotify.com/artist/3adoUmYo7HrLl98fB1nnhW',
            soundcloud: '',
            created_at: '2019-03-27T16:13:07.635Z',
            updated_at: '2019-03-27T16:13:07.635Z',
            image_file_name: 'Kayak.jpg',
            image_content_type: 'image/jpeg',
            image_file_size: 84992,
            image_updated_at: '2019-03-27T16:13:07.002Z',
            slug: 'kayak-jones',
            website: 'https://kayakjones.limitedrun.com/',
            youtube: 'https://www.youtube.com/watch?v=An2DQP5TAcM&feature=youtu.be',
            itunes: 'https://itunes.apple.com/us/artist/kayak-jones/1031834938',
            twitter: 'https://twitter.com/kayakjonesia',
            short_description: null,
            image: {
              full:
                '//s3-us-west-2.amazonaws.com/releasewaveweb/artists/images/000/000/019/original/Kayak.jpg?1553703187',
              thumb:
                '//s3-us-west-2.amazonaws.com/releasewaveweb/artists/images/000/000/019/thumb/Kayak.jpg?1553703187',
              square:
                '//s3-us-west-2.amazonaws.com/releasewaveweb/artists/images/000/000/019/square/Kayak.jpg?1553703187',
              large:
                '//s3-us-west-2.amazonaws.com/releasewaveweb/artists/images/000/000/019/large/Kayak.jpg?1553703187',
            },
          },
        ],
        embeds: [
          {
            id: 91,
            content:
              '<iframe width="560" height="315" src="https://www.youtube.com/embed/An2DQP5TAcM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
            created_at: '2019-03-27T16:34:42.854Z',
            updated_at: '2019-03-27T16:34:42.854Z',
          },
        ],
      },
      {
        id: 10,
        artist_id: null,
        name: 'Fake Blood',
        description:
          "<p>Cleveland OH's Heart Attack Man will release their sophomore LP 'Fake Blood' on April 19 via You Did This/Triple Crown Records.</p>\n",
        release_date: '2019-04-19',
        created_at: '2019-03-20T21:04:50.255Z',
        updated_at: '2019-03-25T21:30:49.048Z',
        image_file_name: 'heart-attack-man-fake-bloody.jpg',
        image_content_type: 'image/jpeg',
        image_file_size: 38945,
        image_updated_at: '2019-03-20T21:04:49.661Z',
        slug: 'fake-blood',
        buy: 'https://heartattackmanofficial.limitedrun.com/store',
        short_description:
          '<p><span style="color: rgb(33,37,41);background-color: rgb(254,254,254);font-size: 16px;font-family: proxima-nova, aktiv-grotesk, -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji;">Cleveland OH\'s Heart Attack Man will release their sophomore LP \'Fake Blood\' on April 19 via You Did This/Triple Crown Records.</span></p>\n',
        featured: false,
        image: {
          full:
            '//s3-us-west-2.amazonaws.com/releasewaveweb/releases/images/000/000/010/original/heart-attack-man-fake-bloody.jpg?1553115889',
          thumb:
            '//s3-us-west-2.amazonaws.com/releasewaveweb/releases/images/000/000/010/thumb/heart-attack-man-fake-bloody.jpg?1553115889',
          square:
            '//s3-us-west-2.amazonaws.com/releasewaveweb/releases/images/000/000/010/square/heart-attack-man-fake-bloody.jpg?1553115889',
          large:
            '//s3-us-west-2.amazonaws.com/releasewaveweb/releases/images/000/000/010/large/heart-attack-man-fake-bloody.jpg?1553115889',
        },
        artists: [
          {
            id: 10,
            name: 'Heart Attack Man',
            bandcamp: 'https://heartattackman.bandcamp.com/album/heart-attack-man',
            facebook: 'https://www.facebook.com/heartattackmane/',
            spotify:
              'https://open.spotify.com/artist/5esKrGWvWmBAmjnao5jInN?autoplay=true&v=A',
            soundcloud: '',
            created_at: '2019-03-20T03:17:10.097Z',
            updated_at: '2019-03-25T21:32:04.775Z',
            image_file_name: 'heartattackman.jpg',
            image_content_type: 'image/jpeg',
            image_file_size: 113164,
            image_updated_at: '2019-03-20T03:17:09.642Z',
            slug: 'heart-attack-man',
            website: 'http://triplecrownrecords.com',
            youtube: '',
            itunes: '',
            twitter: 'https://twitter.com/HeartAttackMane',
            short_description: null,
            image: {
              full:
                '//s3-us-west-2.amazonaws.com/releasewaveweb/artists/images/000/000/010/original/heartattackman.jpg?1553051829',
              thumb:
                '//s3-us-west-2.amazonaws.com/releasewaveweb/artists/images/000/000/010/thumb/heartattackman.jpg?1553051829',
              square:
                '//s3-us-west-2.amazonaws.com/releasewaveweb/artists/images/000/000/010/square/heartattackman.jpg?1553051829',
              large:
                '//s3-us-west-2.amazonaws.com/releasewaveweb/artists/images/000/000/010/large/heartattackman.jpg?1553051829',
            },
          },
        ],
        embeds: [
          {
            id: 76,
            content:
              '<iframe width="560" height="315" src="https://www.youtube.com/embed/nhtYEPcTT0U" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
            created_at: '2019-03-25T21:30:49.106Z',
            updated_at: '2019-03-25T21:30:49.106Z',
          },
        ],
      },
      {
        id: 14,
        artist_id: null,
        name: 'Your Church On My Bonfire',
        description:
          '<p>Glasgow trio will drop their fourth album YOUR CHURCH ON MY BONFIRE on April 26th on Ernest Jenning Records. The follow up to the Mark Hoppus produced punked up aggression of No Grace<em> </em>was recorded and produced in Scotland in October 2018, this time by Andy Monaghan of Frightened Rabbit.&nbsp;</p>\n',
        release_date: '2019-04-26',
        created_at: '2019-03-23T15:14:30.264Z',
        updated_at: '2019-03-24T21:39:52.229Z',
        image_file_name: 'Paws.jpg',
        image_content_type: 'image/jpeg',
        image_file_size: 341334,
        image_updated_at: '2019-03-23T15:14:29.581Z',
        slug: 'your-church-on-my-bonfire',
        buy: 'https://wehavepaws.bandcamp.com/album/your-church-on-my-bonfire',
        short_description: '',
        featured: true,
        image: {
          full:
            '//s3-us-west-2.amazonaws.com/releasewaveweb/releases/images/000/000/014/original/Paws.jpg?1553354069',
          thumb:
            '//s3-us-west-2.amazonaws.com/releasewaveweb/releases/images/000/000/014/thumb/Paws.jpg?1553354069',
          square:
            '//s3-us-west-2.amazonaws.com/releasewaveweb/releases/images/000/000/014/square/Paws.jpg?1553354069',
          large:
            '//s3-us-west-2.amazonaws.com/releasewaveweb/releases/images/000/000/014/large/Paws.jpg?1553354069',
        },
        artists: [
          {
            id: 15,
            name: 'Paws',
            bandcamp: 'https://wehavepaws.bandcamp.com/',
            facebook: 'https://www.facebook.com/wehavepaws/',
            spotify: 'https://open.spotify.com/artist/7lBWdR4AAQLNYYXGTu6jpa',
            soundcloud: '',
            created_at: '2019-03-23T15:03:02.360Z',
            updated_at: '2019-03-23T15:03:02.360Z',
            image_file_name: 'PAWS.jpg',
            image_content_type: 'image/jpeg',
            image_file_size: 510616,
            image_updated_at: '2019-03-23T15:03:01.223Z',
            slug: 'paws',
            website: 'http://www.wehavepaws.com/',
            youtube: '',
            itunes: 'https://itunes.apple.com/us/artist/paws/430668822',
            twitter:
              ' https://twitter.com/wehavepaws?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor',
            short_description: null,
            image: {
              full:
                '//s3-us-west-2.amazonaws.com/releasewaveweb/artists/images/000/000/015/original/PAWS.jpg?1553353381',
              thumb:
                '//s3-us-west-2.amazonaws.com/releasewaveweb/artists/images/000/000/015/thumb/PAWS.jpg?1553353381',
              square:
                '//s3-us-west-2.amazonaws.com/releasewaveweb/artists/images/000/000/015/square/PAWS.jpg?1553353381',
              large:
                '//s3-us-west-2.amazonaws.com/releasewaveweb/artists/images/000/000/015/large/PAWS.jpg?1553353381',
            },
          },
        ],
        embeds: [
          {
            id: 58,
            content:
              '<iframe width="560" height="315" src="https://www.youtube.com/embed/cow0Zfymy20" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
            created_at: '2019-03-24T21:39:52.276Z',
            updated_at: '2019-03-24T21:39:52.276Z',
          },
        ],
      },
      {
        id: 5,
        artist_id: null,
        name: 'Violet Street',
        description:
          '<p>After sharing demos, announcing a tour, and dropping a new single in “Café Amarillo”, Local Natives have formerly announced their highly anticipated follow-up to their 2016 full-length LP, Sunlit Youth. It’s titled Violet Street and due out April 26th via Loma Vista.</p>\n<p>Produced by Shawn Everett (Alabama Shakes, Kacey Musgraves), the band’s fourth studio album finds the Silver Lake outfit chewing on the existential question, “With all of the chaos in the world, where do you find your shelter?”</p>\n',
        release_date: '2019-04-26',
        created_at: '2019-03-20T03:31:46.686Z',
        updated_at: '2019-03-20T03:56:02.721Z',
        image_file_name: '143305-violet-street.jpg',
        image_content_type: 'image/jpeg',
        image_file_size: 265237,
        image_updated_at: '2019-03-20T03:31:46.073Z',
        slug: 'violet-street',
        buy: null,
        short_description: null,
        featured: null,
        image: {
          full:
            '//s3-us-west-2.amazonaws.com/releasewaveweb/releases/images/000/000/005/original/143305-violet-street.jpg?1553052706',
          thumb:
            '//s3-us-west-2.amazonaws.com/releasewaveweb/releases/images/000/000/005/thumb/143305-violet-street.jpg?1553052706',
          square:
            '//s3-us-west-2.amazonaws.com/releasewaveweb/releases/images/000/000/005/square/143305-violet-street.jpg?1553052706',
          large:
            '//s3-us-west-2.amazonaws.com/releasewaveweb/releases/images/000/000/005/large/143305-violet-street.jpg?1553052706',
        },
        artists: [
          {
            id: 5,
            name: 'Local Natives',
            bandcamp: '',
            facebook: '',
            spotify:
              'https://open.spotify.com/artist/75dQReiBOHN37fQgWQrIAJ?autoplay=true&v=A',
            soundcloud: '',
            created_at: '2019-03-20T03:12:47.305Z',
            updated_at: '2019-03-20T03:12:47.305Z',
            image_file_name: 'local-natives.jpg',
            image_content_type: 'image/jpeg',
            image_file_size: 88727,
            image_updated_at: '2019-03-20T03:12:46.849Z',
            slug: 'local-natives',
            website: null,
            youtube: null,
            itunes: null,
            twitter: null,
            short_description: null,
            image: {
              full:
                '//s3-us-west-2.amazonaws.com/releasewaveweb/artists/images/000/000/005/original/local-natives.jpg?1553051566',
              thumb:
                '//s3-us-west-2.amazonaws.com/releasewaveweb/artists/images/000/000/005/thumb/local-natives.jpg?1553051566',
              square:
                '//s3-us-west-2.amazonaws.com/releasewaveweb/artists/images/000/000/005/square/local-natives.jpg?1553051566',
              large:
                '//s3-us-west-2.amazonaws.com/releasewaveweb/artists/images/000/000/005/large/local-natives.jpg?1553051566',
            },
          },
        ],
        embeds: [
          {
            id: 11,
            content:
              '<iframe width="560" height="315" src="https://www.youtube.com/embed/oWwytT5JAdM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
            created_at: '2019-03-20T03:56:02.772Z',
            updated_at: '2019-03-20T03:56:02.772Z',
          },
        ],
      },
      {
        id: 6,
        artist_id: null,
        name: 'Certain Freedoms',
        description:
          "<p>Trade Wind have a new album by the name of “Certain Freedoms” headed for an April 26th release on Other People Records. The band feature members of Stick To Your Guns, Stray From The Path and more among their ranks and have debuted a new single from it titled “No King But Me” below. A limited edition 7″ for the track is available now through certainfreedoms.com.  You can also watch the video for the 2nd single of \"Certain Freedoms\" called 'I Can't Believe You're Gone' below as well. The band will be overseas on a European/UK tour in the spring.</p>\n",
        release_date: '2019-04-26',
        created_at: '2019-03-20T03:33:14.753Z',
        updated_at: '2019-03-26T21:15:01.928Z',
        image_file_name: 'trade-wind-certain.jpeg',
        image_content_type: 'image/jpeg',
        image_file_size: 5854,
        image_updated_at: '2019-03-20T03:33:14.383Z',
        slug: 'certain-freedoms',
        buy: 'http://certainfreedoms.com/',
        short_description: '',
        featured: true,
        image: {
          full:
            '//s3-us-west-2.amazonaws.com/releasewaveweb/releases/images/000/000/006/original/trade-wind-certain.jpeg?1553052794',
          thumb:
            '//s3-us-west-2.amazonaws.com/releasewaveweb/releases/images/000/000/006/thumb/trade-wind-certain.jpeg?1553052794',
          square:
            '//s3-us-west-2.amazonaws.com/releasewaveweb/releases/images/000/000/006/square/trade-wind-certain.jpeg?1553052794',
          large:
            '//s3-us-west-2.amazonaws.com/releasewaveweb/releases/images/000/000/006/large/trade-wind-certain.jpeg?1553052794',
        },
        artists: [
          {
            id: 7,
            name: 'Trade Wind',
            bandcamp: 'https://tradewind.bandcamp.com/',
            facebook: 'https://www.facebook.com/Tradewindband/',
            spotify:
              'https://open.spotify.com/artist/3FCfL4lKWE7vm3mCcOd570?autoplay=true&v=A',
            soundcloud: '',
            created_at: '2019-03-20T03:14:28.555Z',
            updated_at: '2019-03-26T21:18:52.146Z',
            image_file_name: 'trade-wind.jpg',
            image_content_type: 'image/jpeg',
            image_file_size: 647499,
            image_updated_at: '2019-03-20T03:14:27.772Z',
            slug: 'trade-wind',
            website: 'http://certainfreedoms.com/',
            youtube: '',
            itunes: '',
            twitter:
              'https://twitter.com/Tradewindband?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor',
            short_description: null,
            image: {
              full:
                '//s3-us-west-2.amazonaws.com/releasewaveweb/artists/images/000/000/007/original/trade-wind.jpg?1553051667',
              thumb:
                '//s3-us-west-2.amazonaws.com/releasewaveweb/artists/images/000/000/007/thumb/trade-wind.jpg?1553051667',
              square:
                '//s3-us-west-2.amazonaws.com/releasewaveweb/artists/images/000/000/007/square/trade-wind.jpg?1553051667',
              large:
                '//s3-us-west-2.amazonaws.com/releasewaveweb/artists/images/000/000/007/large/trade-wind.jpg?1553051667',
            },
          },
        ],
        embeds: [
          {
            id: 85,
            content:
              '<iframe width="560" height="315" src="https://www.youtube.com/embed/dYxaMg9dIwo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
            created_at: '2019-03-26T21:15:01.991Z',
            updated_at: '2019-03-26T21:15:01.991Z',
          },
          {
            id: 86,
            content:
              '<iframe width="560" height="315" src="https://www.youtube.com/embed/nKd_qQDm9Og" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
            created_at: '2019-03-26T21:15:02.008Z',
            updated_at: '2019-03-26T21:15:02.008Z',
          },
        ],
      },
      {
        id: 15,
        artist_id: null,
        name: 'We Are A Team',
        description:
          '<p>Melbourne Australia\'s emotionally driven indie pop-punk favorites Ceres will release their new album "We Are A Team" on April 26, 2019 on Cooking Vinyl Australia.  Click the pre-order button to the right to get your hands on this on this one!</p>\n',
        release_date: '2019-04-26',
        created_at: '2019-03-23T15:49:36.110Z',
        updated_at: '2019-03-23T16:10:32.372Z',
        image_file_name: 'Ceres.jpg',
        image_content_type: 'image/jpeg',
        image_file_size: 50434,
        image_updated_at: '2019-03-23T15:49:35.493Z',
        slug: 'we-are-a-team',
        buy: 'https://ceresband.bandcamp.com/album/we-are-a-team',
        short_description: null,
        featured: null,
        image: {
          full:
            '//s3-us-west-2.amazonaws.com/releasewaveweb/releases/images/000/000/015/original/Ceres.jpg?1553356175',
          thumb:
            '//s3-us-west-2.amazonaws.com/releasewaveweb/releases/images/000/000/015/thumb/Ceres.jpg?1553356175',
          square:
            '//s3-us-west-2.amazonaws.com/releasewaveweb/releases/images/000/000/015/square/Ceres.jpg?1553356175',
          large:
            '//s3-us-west-2.amazonaws.com/releasewaveweb/releases/images/000/000/015/large/Ceres.jpg?1553356175',
        },
        artists: [
          {
            id: 16,
            name: 'Ceres',
            bandcamp: 'https://ceresband.bandcamp.com/ ',
            facebook: 'https://www.facebook.com/ceresband/',
            spotify: 'https://open.spotify.com/artist/6ignu1FESsoUapE3EnbCFL',
            soundcloud: '',
            created_at: '2019-03-23T15:40:40.883Z',
            updated_at: '2019-03-23T15:40:40.883Z',
            image_file_name: 'Ceres-band.jpg',
            image_content_type: 'image/jpeg',
            image_file_size: 144151,
            image_updated_at: '2019-03-23T15:40:40.406Z',
            slug: 'ceres',
            website: ' http://weareceres.com',
            youtube: '',
            itunes: 'https://itunes.apple.com/us/artist/ceres/1126229787',
            twitter: 'https://twitter.com/weareceres?lang=en',
            short_description: null,
            image: {
              full:
                '//s3-us-west-2.amazonaws.com/releasewaveweb/artists/images/000/000/016/original/Ceres-band.jpg?1553355640',
              thumb:
                '//s3-us-west-2.amazonaws.com/releasewaveweb/artists/images/000/000/016/thumb/Ceres-band.jpg?1553355640',
              square:
                '//s3-us-west-2.amazonaws.com/releasewaveweb/artists/images/000/000/016/square/Ceres-band.jpg?1553355640',
              large:
                '//s3-us-west-2.amazonaws.com/releasewaveweb/artists/images/000/000/016/large/Ceres-band.jpg?1553355640',
            },
          },
        ],
        embeds: [
          {
            id: 37,
            content:
              '<iframe width="560" height="315" src="https://www.youtube.com/embed/ENgRpjbAJTU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
            created_at: '2019-03-23T16:10:32.419Z',
            updated_at: '2019-03-23T16:10:32.419Z',
          },
          {
            id: 38,
            content:
              '<iframe width="560" height="315" src="https://www.youtube.com/embed/Aw4-G9zXAbU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
            created_at: '2019-03-23T16:10:32.432Z',
            updated_at: '2019-03-23T16:10:32.432Z',
          },
          {
            id: 39,
            content:
              '<iframe width="560" height="315" src="https://www.youtube.com/embed/MqvhxrK43yA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
            created_at: '2019-03-23T16:10:32.442Z',
            updated_at: '2019-03-23T16:10:32.442Z',
          },
        ],
      },
      {
        id: 16,
        artist_id: null,
        name: 'To Hell With This Delicate Equation',
        description:
          "<p>The Story Changes (Mark McMillon and Christopher Popadak of Hawthorne Heights and Chris Serafini of The Stereo) are set to release their brand new LP 'To Hell With This Delicate Equation' on April 26 via Ohio-based Magnaphone Records. Featuring members of Hawthorne Heights (Mark McMillon and Christopher Popadak) and The Stereo (Chris Serafini), Dayton, Ohio natives The Story Changes’ newest album ‘To Hell With this Delicate Equation’ is an energetic blend of late 90’s/early 2000’s emo, modern rock, and a moody aggressiveness that supplies a gritty edge in all the right places. The album was mixed by longtime friend Jamie Woolford (Gin Blossoms, The Smoking Popes, Punchline). The first single 'Shooting Stars' can be found below.</p>\n",
        release_date: '2019-04-26',
        created_at: '2019-03-25T20:49:01.380Z',
        updated_at: '2019-03-26T00:50:39.691Z',
        image_file_name: 'unnamed.jpg',
        image_content_type: 'image/jpeg',
        image_file_size: 252999,
        image_updated_at: '2019-03-25T20:49:00.727Z',
        slug: 'to-hell-with-this-delicate-equation',
        buy: 'http://www.thestorychanges.com/',
        short_description: '<p style="text-align:left;"></p>\n',
        featured: true,
        image: {
          full:
            '//s3-us-west-2.amazonaws.com/releasewaveweb/releases/images/000/000/016/original/unnamed.jpg?1553546940',
          thumb:
            '//s3-us-west-2.amazonaws.com/releasewaveweb/releases/images/000/000/016/thumb/unnamed.jpg?1553546940',
          square:
            '//s3-us-west-2.amazonaws.com/releasewaveweb/releases/images/000/000/016/square/unnamed.jpg?1553546940',
          large:
            '//s3-us-west-2.amazonaws.com/releasewaveweb/releases/images/000/000/016/large/unnamed.jpg?1553546940',
        },
        artists: [
          {
            id: 17,
            name: 'The Story Changes',
            bandcamp: 'https://thestorychanges.bandcamp.com/',
            facebook: 'https://www.facebook.com/thestorychanges/',
            spotify: 'https://open.spotify.com/artist/4ESrVjoUNUtw0QUZl6t3nF',
            soundcloud: '',
            created_at: '2019-03-25T20:42:48.970Z',
            updated_at: '2019-03-25T20:42:48.970Z',
            image_file_name: 'The-Story-Changes-band-2016.jpg',
            image_content_type: 'image/jpeg',
            image_file_size: 242464,
            image_updated_at: '2019-03-25T20:42:48.233Z',
            slug: 'the-story-changes',
            website: 'http://www.thestorychanges.com/',
            youtube: '',
            itunes: '',
            twitter: 'https://twitter.com/theStoryChanges?lang=en',
            short_description: null,
            image: {
              full:
                '//s3-us-west-2.amazonaws.com/releasewaveweb/artists/images/000/000/017/original/The-Story-Changes-band-2016.jpg?1553546568',
              thumb:
                '//s3-us-west-2.amazonaws.com/releasewaveweb/artists/images/000/000/017/thumb/The-Story-Changes-band-2016.jpg?1553546568',
              square:
                '//s3-us-west-2.amazonaws.com/releasewaveweb/artists/images/000/000/017/square/The-Story-Changes-band-2016.jpg?1553546568',
              large:
                '//s3-us-west-2.amazonaws.com/releasewaveweb/artists/images/000/000/017/large/The-Story-Changes-band-2016.jpg?1553546568',
            },
          },
        ],
        embeds: [
          {
            id: 77,
            content:
              '<iframe width="560" height="315" src="https://www.youtube.com/embed/3CcVxzXPeTY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
            created_at: '2019-03-26T00:50:39.755Z',
            updated_at: '2019-03-26T00:50:39.755Z',
          },
          {
            id: 78,
            content: '',
            created_at: '2019-03-26T00:50:39.767Z',
            updated_at: '2019-03-26T00:50:39.767Z',
          },
        ],
      },
      {
        id: 20,
        artist_id: null,
        name: 'Age of Unreason',
        description:
          '<p>Acclaimed Los Angeles, CA punk rock band Bad Religion will release its 17th studio album on May 3, 2019 on Epitaph Records. The album was co-produced by Carlos de la Garza. The single "Chaos From Within" from the forthcoming album can be heard below.</p>\n',
        release_date: '2019-05-03',
        created_at: '2019-03-28T01:28:21.315Z',
        updated_at: '2019-03-28T01:31:41.299Z',
        image_file_name: 'BAD_R.jpg',
        image_content_type: 'image/jpeg',
        image_file_size: 154678,
        image_updated_at: '2019-03-28T01:28:20.587Z',
        slug: 'age-of-unreason',
        buy: 'https://badreligion.ffm.to/ageofunreason',
        short_description:
          '<p><span style="color: rgb(33,37,41);background-color: rgb(254,254,254);font-size: 16px;font-family: proxima-nova, aktiv-grotesk, -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji;">Acclaimed Los Angeles, CA punk rock band Bad Religion will release its 17th studio album on May 3, 2019 on Epitaph Records. The album was co-produced by Carlos de la Garza. The single "Chaos From Within" from the forthcoming album can be heard below.</span></p>\n',
        featured: false,
        image: {
          full:
            '//s3-us-west-2.amazonaws.com/releasewaveweb/releases/images/000/000/020/original/BAD_R.jpg?1553736500',
          thumb:
            '//s3-us-west-2.amazonaws.com/releasewaveweb/releases/images/000/000/020/thumb/BAD_R.jpg?1553736500',
          square:
            '//s3-us-west-2.amazonaws.com/releasewaveweb/releases/images/000/000/020/square/BAD_R.jpg?1553736500',
          large:
            '//s3-us-west-2.amazonaws.com/releasewaveweb/releases/images/000/000/020/large/BAD_R.jpg?1553736500',
        },
        artists: [
          {
            id: 20,
            name: 'Bad Religion',
            bandcamp: '',
            facebook: 'https://www.facebook.com/badreligion',
            spotify: 'https://open.spotify.com/artist/2yJwXpWAQOOl5XFzbCxLs9',
            soundcloud: 'https://soundcloud.com/thebrpage',
            created_at: '2019-03-28T01:17:56.371Z',
            updated_at: '2019-03-28T01:17:56.371Z',
            image_file_name: 'BR.png',
            image_content_type: 'image/jpeg',
            image_file_size: 114617,
            image_updated_at: '2019-03-28T01:17:55.796Z',
            slug: 'bad-religion',
            website: 'http://www.badreligion.com/',
            youtube: '',
            itunes: '',
            twitter: 'https://twitter.com/badreligion',
            short_description: null,
            image: {
              full:
                '//s3-us-west-2.amazonaws.com/releasewaveweb/artists/images/000/000/020/original/BR.png?1553735875',
              thumb:
                '//s3-us-west-2.amazonaws.com/releasewaveweb/artists/images/000/000/020/thumb/BR.png?1553735875',
              square:
                '//s3-us-west-2.amazonaws.com/releasewaveweb/artists/images/000/000/020/square/BR.png?1553735875',
              large:
                '//s3-us-west-2.amazonaws.com/releasewaveweb/artists/images/000/000/020/large/BR.png?1553735875',
            },
          },
        ],
        embeds: [
          {
            id: 95,
            content:
              '<iframe width="560" height="315" src="https://www.youtube.com/embed/clI_8HnCGVo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
            created_at: '2019-03-28T01:31:41.346Z',
            updated_at: '2019-03-28T01:31:41.346Z',
          },
        ],
      },
      {
        id: 1,
        artist_id: null,
        name: 'Problems',
        description:
          '<p>Last year, ’90s golden era emo heroes the Get Up Kids returned with the Kicker EP, their first new music in seven years. And today, they’ve announced a new album called Problems, their first full-length since 2011’s There Are Rules. They recorded the LP with the Grammy Award-winning Kurt Vile/the National producer Peter Katis, and today, they’re sharing a music video for its anthemic lead single “Satellite.”</p>\n',
        release_date: '2019-05-15',
        created_at: '2019-03-20T03:05:15.630Z',
        updated_at: '2019-03-24T21:39:36.911Z',
        image_file_name: 'getupkids-problems.jpg',
        image_content_type: 'image/jpeg',
        image_file_size: 366536,
        image_updated_at: '2019-03-20T03:05:14.819Z',
        slug: 'problems',
        buy: '',
        short_description: '',
        featured: true,
        image: {
          full:
            '//s3-us-west-2.amazonaws.com/releasewaveweb/releases/images/000/000/001/original/getupkids-problems.jpg?1553051114',
          thumb:
            '//s3-us-west-2.amazonaws.com/releasewaveweb/releases/images/000/000/001/thumb/getupkids-problems.jpg?1553051114',
          square:
            '//s3-us-west-2.amazonaws.com/releasewaveweb/releases/images/000/000/001/square/getupkids-problems.jpg?1553051114',
          large:
            '//s3-us-west-2.amazonaws.com/releasewaveweb/releases/images/000/000/001/large/getupkids-problems.jpg?1553051114',
        },
        artists: [
          {
            id: 1,
            name: 'The Get Up Kids',
            bandcamp: '',
            facebook: 'https://www.facebook.com/TheGetUpKids/',
            spotify: 'https://open.spotify.com/artist/54Bjxn26WsjfslQbNVtSCm',
            soundcloud: '',
            created_at: '2019-03-20T02:18:24.040Z',
            updated_at: '2019-03-20T02:18:24.040Z',
            image_file_name: 'the-get-up-kids-2018-cr-Dalton-Paley-billboard-1548.jpg',
            image_content_type: 'image/jpeg',
            image_file_size: 479368,
            image_updated_at: '2019-03-20T02:18:23.381Z',
            slug: 'the-get-up-kids',
            website: null,
            youtube: null,
            itunes: null,
            twitter: null,
            short_description: null,
            image: {
              full:
                '//s3-us-west-2.amazonaws.com/releasewaveweb/artists/images/000/000/001/original/the-get-up-kids-2018-cr-Dalton-Paley-billboard-1548.jpg?1553048303',
              thumb:
                '//s3-us-west-2.amazonaws.com/releasewaveweb/artists/images/000/000/001/thumb/the-get-up-kids-2018-cr-Dalton-Paley-billboard-1548.jpg?1553048303',
              square:
                '//s3-us-west-2.amazonaws.com/releasewaveweb/artists/images/000/000/001/square/the-get-up-kids-2018-cr-Dalton-Paley-billboard-1548.jpg?1553048303',
              large:
                '//s3-us-west-2.amazonaws.com/releasewaveweb/artists/images/000/000/001/large/the-get-up-kids-2018-cr-Dalton-Paley-billboard-1548.jpg?1553048303',
            },
          },
        ],
        embeds: [
          {
            id: 57,
            content:
              '<iframe width="560" height="315" src="https://www.youtube.com/embed/n6zluCkD1mE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
            created_at: '2019-03-24T21:39:37.005Z',
            updated_at: '2019-03-24T21:39:37.005Z',
          },
        ],
      },
      {
        id: 7,
        artist_id: null,
        name: 'Nothing Stays',
        description:
          'Nothing Stays is the new LP from the Baltimore pop/rock/emo heroes Wnder.',
        release_date: '2019-05-17',
        created_at: '2019-03-20T03:36:17.332Z',
        updated_at: '2019-03-20T03:36:17.332Z',
        image_file_name: 'nothing-stays.jpg',
        image_content_type: 'image/jpeg',
        image_file_size: 220012,
        image_updated_at: '2019-03-20T03:36:16.446Z',
        slug: 'nothing-stays',
        buy: null,
        short_description: null,
        featured: null,
        image: {
          full:
            '//s3-us-west-2.amazonaws.com/releasewaveweb/releases/images/000/000/007/original/nothing-stays.jpg?1553052976',
          thumb:
            '//s3-us-west-2.amazonaws.com/releasewaveweb/releases/images/000/000/007/thumb/nothing-stays.jpg?1553052976',
          square:
            '//s3-us-west-2.amazonaws.com/releasewaveweb/releases/images/000/000/007/square/nothing-stays.jpg?1553052976',
          large:
            '//s3-us-west-2.amazonaws.com/releasewaveweb/releases/images/000/000/007/large/nothing-stays.jpg?1553052976',
        },
        artists: [
          {
            id: 3,
            name: 'Wvnder',
            bandcamp: '',
            facebook: 'https://www.facebook.com/WVNDERband/',
            spotify: '',
            soundcloud: 'https://wvnder.bandcamp.com/',
            created_at: '2019-03-20T03:10:26.858Z',
            updated_at: '2019-03-20T03:10:26.858Z',
            image_file_name: 'w4nder.jpg',
            image_content_type: 'image/jpeg',
            image_file_size: 126886,
            image_updated_at: '2019-03-20T03:10:26.275Z',
            slug: 'wvnder',
            website: null,
            youtube: null,
            itunes: null,
            twitter: null,
            short_description: null,
            image: {
              full:
                '//s3-us-west-2.amazonaws.com/releasewaveweb/artists/images/000/000/003/original/w4nder.jpg?1553051426',
              thumb:
                '//s3-us-west-2.amazonaws.com/releasewaveweb/artists/images/000/000/003/thumb/w4nder.jpg?1553051426',
              square:
                '//s3-us-west-2.amazonaws.com/releasewaveweb/artists/images/000/000/003/square/w4nder.jpg?1553051426',
              large:
                '//s3-us-west-2.amazonaws.com/releasewaveweb/artists/images/000/000/003/large/w4nder.jpg?1553051426',
            },
          },
        ],
        embeds: [
          {
            id: 7,
            content:
              '<iframe width="560" height="315" src="https://www.youtube.com/embed/90pRlgTj8yQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
            created_at: '2019-03-20T03:36:18.025Z',
            updated_at: '2019-03-20T03:36:18.025Z',
          },
        ],
      },
      {
        id: 19,
        artist_id: null,
        name: 'I Am Easy To Find',
        description:
          '<p>The National have finished recording the follow-up to their Grammy-winning 2017 album, Sleep Well Beast. The band’s longtime producer Peter Katis finished mixing the record earlier this month, as reported by his management company Worlds End.</p>\n<p>Katis has worked with The National on nearly all of their albums, specifically 2003’s Sad Songs for Dirty Lovers, 2004’s Cherry Tree EP, 2005’s Alligator, 2007’s Boxer, 2010’s High Violet, 2013’s Trouble Will Find Me, and 2017’s Sleep Well Beast.</p>\n',
        release_date: '2019-05-17',
        created_at: '2019-03-28T01:12:14.034Z',
        updated_at: '2019-03-28T01:12:14.034Z',
        image_file_name: 'national-i-am-easy-to-find.jpg',
        image_content_type: 'image/jpeg',
        image_file_size: 73234,
        image_updated_at: '2019-03-28T01:12:13.502Z',
        slug: 'i-am-easy-to-find',
        buy:
          'https://www.googleadservices.com/pagead/aclk?sa=L&ai=DChcSEwitiP7g06PhAhXd_-MHHTPXB7oYABABGgJ5bQ&ae=1&ohost=www.google.com&cid=CAESP-D296K-LJ2V6XDnF36lck1FcW3sEVMhNWVGGtmSEZlDzyz0wq-Kr4lWnlVbYgzPo8Gqh_Rrdeo2e8neDadGJQ&sig=AOD64_1gFyMxgKvG5FnCFpu2J3mlDaT9eA&ctype=5&q=&ved=0ahUKEwiD9-_g06PhAhUFnKwKHW3eDqcQ9A4ItAE&adurl=https://roughtrade.com/us/music/the-national-i-am-easy-to-find%3Fchannable%3De64967.MjQ1NTM0%26gclid%3DCjwKCAjwvuzkBRAhEiwA9E3FUpg1kzdi5puYjy22io0b4bNV_ofrmjJ_PnhgXQgV3JaB8oS4_ErlGxoCaxgQAvD_BwE',
        short_description: '',
        featured: false,
        image: {
          full:
            '//s3-us-west-2.amazonaws.com/releasewaveweb/releases/images/000/000/019/original/national-i-am-easy-to-find.jpg?1553735533',
          thumb:
            '//s3-us-west-2.amazonaws.com/releasewaveweb/releases/images/000/000/019/thumb/national-i-am-easy-to-find.jpg?1553735533',
          square:
            '//s3-us-west-2.amazonaws.com/releasewaveweb/releases/images/000/000/019/square/national-i-am-easy-to-find.jpg?1553735533',
          large:
            '//s3-us-west-2.amazonaws.com/releasewaveweb/releases/images/000/000/019/large/national-i-am-easy-to-find.jpg?1553735533',
        },
        artists: [
          {
            id: 4,
            name: 'The National',
            bandcamp: 'https://thenational.bandcamp.com/',
            facebook: 'https://www.facebook.com/thenationalofficial/',
            spotify:
              'https://open.spotify.com/artist/2cCUtGK9sDU2EoElnk0GNB?autoplay=true&v=A',
            soundcloud: 'https://soundcloud.com/the-national-official',
            created_at: '2019-03-20T03:12:02.214Z',
            updated_at: '2019-03-28T01:08:33.935Z',
            image_file_name: 'thenational.jpg',
            image_content_type: 'image/jpeg',
            image_file_size: 403129,
            image_updated_at: '2019-03-20T03:12:01.516Z',
            slug: 'the-national',
            website: 'https://americanmary.com/',
            youtube: 'https://www.youtube.com/channel/UCeiRyLo_Q9q4tlv9aaQJF5w',
            itunes: 'https://itunes.apple.com/us/artist/the-national/51075707',
            twitter: 'https://twitter.com/thenational?lang=en',
            short_description: null,
            image: {
              full:
                '//s3-us-west-2.amazonaws.com/releasewaveweb/artists/images/000/000/004/original/thenational.jpg?1553051521',
              thumb:
                '//s3-us-west-2.amazonaws.com/releasewaveweb/artists/images/000/000/004/thumb/thenational.jpg?1553051521',
              square:
                '//s3-us-west-2.amazonaws.com/releasewaveweb/artists/images/000/000/004/square/thenational.jpg?1553051521',
              large:
                '//s3-us-west-2.amazonaws.com/releasewaveweb/artists/images/000/000/004/large/thenational.jpg?1553051521',
            },
          },
        ],
        embeds: [
          {
            id: 92,
            content:
              '<iframe width="560" height="315" src="https://www.youtube.com/embed/M2Uow9aNCRU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
            created_at: '2019-03-28T01:12:15.058Z',
            updated_at: '2019-03-28T01:12:15.058Z',
          },
        ],
      },
      {
        id: 21,
        artist_id: null,
        name: 'Scream Through The Walls',
        description:
          '<p><span style="color: rgb(33,37,41);background-color: rgb(254,254,254);font-size: 16px;font-family: proxima-nova, aktiv-grotesk, -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji;">Louisiana post-hardcore outfit As Cities Burn return with their first album in 10 years titled "Scream Through The Walls", due out June 7th, 2019 on Equal Vision Records. The new album not only marks the end of a decate-long absence, but it is also the first album featuring the Bonnette brothers collaborating since the release of their 2005 seminal debut LP "Son, I Loved You At Your Darkest".  Below you can hear their new single "Chains" off the forthcoming LP. </span></p>\n',
        release_date: '2019-06-07',
        created_at: '2019-04-04T15:18:24.008Z',
        updated_at: '2019-04-04T15:38:33.286Z',
        image_file_name: 'As-Cities-Burn-Scream-Through-Walls.jpg',
        image_content_type: 'image/jpeg',
        image_file_size: 58908,
        image_updated_at: '2019-04-04T15:24:39.182Z',
        slug: 'scream-through-the-walls',
        buy:
          'https://ascitiesburn.lnk.to/scream?fbclid=IwAR1h13tjf_7LfC8TRtXKDoSIsyDVJblw-p2gnaea6SCBT069ZQ1BD25WS7U',
        short_description:
          '<p>Louisiana post-hardcore outfit As Cities Burn return with their first album in 10 years titled "Scream Through The Walls", due out June 7th, 2019 on Equal Vision Records. The new album not only marks the end of a decate-long absence, but it is also the first album featuring the Bonnette brothers collaborating since the release of their 2005 seminal debut LP "Son, I Loved You At Your Darkest".  Below you can hear their brand new single "Chains" off the forthcoming LP along with the previously released single "2020 AD".&nbsp;</p>\n',
        featured: false,
        image: {
          full:
            '//s3-us-west-2.amazonaws.com/releasewaveweb/releases/images/000/000/021/original/As-Cities-Burn-Scream-Through-Walls.jpg?1554391479',
          thumb:
            '//s3-us-west-2.amazonaws.com/releasewaveweb/releases/images/000/000/021/thumb/As-Cities-Burn-Scream-Through-Walls.jpg?1554391479',
          square:
            '//s3-us-west-2.amazonaws.com/releasewaveweb/releases/images/000/000/021/square/As-Cities-Burn-Scream-Through-Walls.jpg?1554391479',
          large:
            '//s3-us-west-2.amazonaws.com/releasewaveweb/releases/images/000/000/021/large/As-Cities-Burn-Scream-Through-Walls.jpg?1554391479',
        },
        artists: [
          {
            id: 21,
            name: 'As Cities Burn',
            bandcamp: '',
            facebook: 'https://www.facebook.com/ascitiesburn/',
            spotify: 'https://open.spotify.com/artist/7eJA8CZoXCETi9axIfBFGT',
            soundcloud: '',
            created_at: '2019-04-04T15:13:34.574Z',
            updated_at: '2019-04-04T15:13:34.574Z',
            image_file_name: 'AS_Cities.jpeg',
            image_content_type: 'image/jpeg',
            image_file_size: 16384,
            image_updated_at: '2019-04-04T15:13:34.051Z',
            slug: 'as-cities-burn',
            website: 'http://www.ascitiesburn.net/',
            youtube: '',
            itunes: 'https://itunes.apple.com/us/artist/as-cities-burn/66329417',
            twitter: 'https://twitter.com/acbband?lang=en',
            short_description: null,
            image: {
              full:
                '//s3-us-west-2.amazonaws.com/releasewaveweb/artists/images/000/000/021/original/AS_Cities.jpeg?1554390814',
              thumb:
                '//s3-us-west-2.amazonaws.com/releasewaveweb/artists/images/000/000/021/thumb/AS_Cities.jpeg?1554390814',
              square:
                '//s3-us-west-2.amazonaws.com/releasewaveweb/artists/images/000/000/021/square/AS_Cities.jpeg?1554390814',
              large:
                '//s3-us-west-2.amazonaws.com/releasewaveweb/artists/images/000/000/021/large/AS_Cities.jpeg?1554390814',
            },
          },
        ],
        embeds: [
          {
            id: 103,
            content:
              '<iframe width="560" height="315" src="https://www.youtube.com/embed/s94eafa7mRE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
            created_at: '2019-04-04T15:38:33.346Z',
            updated_at: '2019-04-04T15:38:33.346Z',
          },
          {
            id: 104,
            content:
              '<iframe width="560" height="315" src="https://www.youtube.com/embed/OHy5Xo8ftRc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
            created_at: '2019-04-04T15:38:33.359Z',
            updated_at: '2019-04-04T15:38:33.359Z',
          },
        ],
      },
    ],
    itemsByMonth: {
      '03': [
        {
          id: 9,
          artist_id: null,
          name: 'Letters To Our Former Selves',
          description:
            '<p>Youth Fountain have announced that they will be releasing their highly anticipated debut full-length album, Letters To Our Former Selves, on March 8, 2019 via Pure Noise Records. The band has also shared a brand new video for lead single, "Deadlocked," a brutally honest track about getting stuck in feelings of anxiety and depression. Fans can watch the video, as well as pre-order the album, at <a href="http://smarturl.it/YFLTOFS" target="_blank">smarturl.it/YFLTOFS</a>.&nbsp;&nbsp;</p>\n<p>"Letters to Our Former Selves is a record that holds pieces of the person I have been over the past decade. Within each track, there are impactful moments &amp; experiences captured through lyricism - touching on topics about self-identity issues, isolation, relationships &amp; mental health problems," guitarist Tyler Zanon shares. "I hope it means something to you all."</p>\n<p>He continues: "Our single \'Deadlocked\' is one of the more honest &amp; blunt songs off the record. Feelings revolving around battling with depression and anxiety - It was written a few years back during a super dark place I was in while growing up / coming to terms with my adolescence. Sometimes you feel trapped in those negative spaces and there\'s nothing anyone can do to fix that but yourself."</p>\n',
          release_date: '2019-03-08',
          created_at: '2019-03-20T19:57:22.415Z',
          updated_at: '2019-03-24T03:14:56.926Z',
          image_file_name: 'letters.jpg',
          image_content_type: 'image/jpeg',
          image_file_size: 313435,
          image_updated_at: '2019-03-20T19:57:21.689Z',
          slug: 'letters-to-our-former-selves',
          buy: '',
          short_description:
            '<p><span style="color: rgb(33,37,41);background-color: rgb(254,254,254);font-size: 16px;font-family: proxima-nova, aktiv-grotesk, -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji;">Youth Fountain have announced that they will be releasing their highly anticipated debut full-length album, Letters To Our Former Selves, on March 8, 2019 via Pure Noise Records. The band has also shared a brand new video for lead single, "Deadlocked," a brutally honest track about getting stuck in feelings of anxiety and depression. Fans can watch the video, as well as pre-order the album, at </span><a href="http://smarturl.it/YFLTOFS" target="_blank"><span style="color: rgb(172,30,140);background-color: transparent;font-size: 16px;font-family: proxima-nova, aktiv-grotesk, -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji;">smarturl.it/YFLTOFS</span></a><span style="color: rgb(33,37,41);background-color: rgb(254,254,254);font-size: 16px;font-family: proxima-nova, aktiv-grotesk, -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji;">.  </span></p>\n',
          featured: null,
          image: {
            full:
              '//s3-us-west-2.amazonaws.com/releasewaveweb/releases/images/000/000/009/original/letters.jpg?1553111841',
            thumb:
              '//s3-us-west-2.amazonaws.com/releasewaveweb/releases/images/000/000/009/thumb/letters.jpg?1553111841',
            square:
              '//s3-us-west-2.amazonaws.com/releasewaveweb/releases/images/000/000/009/square/letters.jpg?1553111841',
            large:
              '//s3-us-west-2.amazonaws.com/releasewaveweb/releases/images/000/000/009/large/letters.jpg?1553111841',
          },
          artists: [
            {
              id: 12,
              name: 'Youth Fountain',
              bandcamp: '',
              facebook: 'https://www.facebook.com/youthfountainmusic/',
              spotify: '',
              soundcloud: '',
              created_at: '2019-03-20T19:48:45.534Z',
              updated_at: '2019-03-20T19:54:28.319Z',
              image_file_name: 'youthfountain.jpeg',
              image_content_type: 'image/jpeg',
              image_file_size: 955352,
              image_updated_at: '2019-03-20T19:54:26.925Z',
              slug: 'youth-fountain',
              website: null,
              youtube: null,
              itunes: null,
              twitter: null,
              short_description: null,
              image: {
                full:
                  '//s3-us-west-2.amazonaws.com/releasewaveweb/artists/images/000/000/012/original/youthfountain.jpeg?1553111666',
                thumb:
                  '//s3-us-west-2.amazonaws.com/releasewaveweb/artists/images/000/000/012/thumb/youthfountain.jpeg?1553111666',
                square:
                  '//s3-us-west-2.amazonaws.com/releasewaveweb/artists/images/000/000/012/square/youthfountain.jpeg?1553111666',
                large:
                  '//s3-us-west-2.amazonaws.com/releasewaveweb/artists/images/000/000/012/large/youthfountain.jpeg?1553111666',
              },
            },
          ],
          embeds: [
            {
              id: 48,
              content:
                '<iframe width="560" height="315" src="https://www.youtube.com/embed/19A9sSSsblk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
              created_at: '2019-03-24T03:14:57.004Z',
              updated_at: '2019-03-24T03:14:57.004Z',
            },
          ],
        },
        {
          id: 8,
          artist_id: null,
          name: 'The Stars On Your Ceiling',
          description:
            '<p>Sleep In have a new album, The Stars On Your Ceiling, that will be released via Know Hope Records on March 22, 2019.</p>\n',
          release_date: '2019-03-22',
          created_at: '2019-03-20T17:47:25.251Z',
          updated_at: '2019-03-24T03:15:13.682Z',
          image_file_name: 'sleepin-stars-600x600.jpg',
          image_content_type: 'image/jpeg',
          image_file_size: 265182,
          image_updated_at: '2019-03-20T17:47:24.718Z',
          slug: 'the-stars-on-your-ceiling',
          buy: 'https://sleep-in.bandcamp.com/album/the-stars-on-your-ceiling',
          short_description:
            '<p><span style="color: rgb(33,37,41);background-color: rgb(254,254,254);font-size: 16px;font-family: proxima-nova, aktiv-grotesk, -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji;">Sleep In have a new album, The Stars On Your Ceiling, that will be released via Know Hope Records on March 22, 2019.</span></p>\n',
          featured: null,
          image: {
            full:
              '//s3-us-west-2.amazonaws.com/releasewaveweb/releases/images/000/000/008/original/sleepin-stars-600x600.jpg?1553104044',
            thumb:
              '//s3-us-west-2.amazonaws.com/releasewaveweb/releases/images/000/000/008/thumb/sleepin-stars-600x600.jpg?1553104044',
            square:
              '//s3-us-west-2.amazonaws.com/releasewaveweb/releases/images/000/000/008/square/sleepin-stars-600x600.jpg?1553104044',
            large:
              '//s3-us-west-2.amazonaws.com/releasewaveweb/releases/images/000/000/008/large/sleepin-stars-600x600.jpg?1553104044',
          },
          artists: [
            {
              id: 11,
              name: 'Sleep In',
              bandcamp: 'https://sleep-in.bandcamp.com/',
              facebook: 'https://www.facebook.com/sleepinband/',
              spotify:
                'https://open.spotify.com/artist/7k5pDjVawZrHGmRPPR29vO?autoplay=true&v=A',
              soundcloud: '',
              created_at: '2019-03-20T17:43:41.093Z',
              updated_at: '2019-03-23T15:58:58.737Z',
              image_file_name: 'Sleep-In-band-2016.jpg',
              image_content_type: 'image/jpeg',
              image_file_size: 199715,
              image_updated_at: '2019-03-20T17:43:40.508Z',
              slug: 'sleep-in',
              website: '',
              youtube: '',
              itunes: '',
              twitter: 'https://twitter.com/sleepinband?lang=en',
              short_description: null,
              image: {
                full:
                  '//s3-us-west-2.amazonaws.com/releasewaveweb/artists/images/000/000/011/original/Sleep-In-band-2016.jpg?1553103820',
                thumb:
                  '//s3-us-west-2.amazonaws.com/releasewaveweb/artists/images/000/000/011/thumb/Sleep-In-band-2016.jpg?1553103820',
                square:
                  '//s3-us-west-2.amazonaws.com/releasewaveweb/artists/images/000/000/011/square/Sleep-In-band-2016.jpg?1553103820',
                large:
                  '//s3-us-west-2.amazonaws.com/releasewaveweb/artists/images/000/000/011/large/Sleep-In-band-2016.jpg?1553103820',
              },
            },
          ],
          embeds: [
            {
              id: 49,
              content:
                '<iframe style="border: 0; width: 350px; height: 470px;" src="https://bandcamp.com/EmbeddedPlayer/album=419050648/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" seamless><a href="http://sleep-in.bandcamp.com/album/the-stars-on-your-ceiling">The Stars On Your Ceiling by Sleep In.</a></iframe>',
              created_at: '2019-03-24T03:15:13.730Z',
              updated_at: '2019-03-24T03:15:13.730Z',
            },
          ],
        },
        {
          id: 17,
          artist_id: null,
          name: 'The Longest Lonesome',
          description:
            '<p style="text-align:justify;">Canadian melodic post-hardcore band RARITY are set to drop their sophomore LP on March 29th, 2019. The 11 track album was produced, engineered, and mixed by Sam Guaiana at Room 21 Sound in Toronto. Below you will find the official video for \'Shawinigan\', the latest single from the new LP.</p>\n',
          release_date: '2019-03-29',
          created_at: '2019-03-26T22:11:45.577Z',
          updated_at: '2019-03-28T23:26:52.989Z',
          image_file_name: 'rarity-the-longest-lonesome-music-review-punk-rock-theory.jpg',
          image_content_type: 'image/jpeg',
          image_file_size: 41654,
          image_updated_at: '2019-03-26T22:11:45.137Z',
          slug: 'the-longest-lonesome',
          buy: 'https://itunes.apple.com/us/album/the-longest-lonesome/1454055141',
          short_description: '',
          featured: true,
          image: {
            full:
              '//s3-us-west-2.amazonaws.com/releasewaveweb/releases/images/000/000/017/original/rarity-the-longest-lonesome-music-review-punk-rock-theory.jpg?1553638305',
            thumb:
              '//s3-us-west-2.amazonaws.com/releasewaveweb/releases/images/000/000/017/thumb/rarity-the-longest-lonesome-music-review-punk-rock-theory.jpg?1553638305',
            square:
              '//s3-us-west-2.amazonaws.com/releasewaveweb/releases/images/000/000/017/square/rarity-the-longest-lonesome-music-review-punk-rock-theory.jpg?1553638305',
            large:
              '//s3-us-west-2.amazonaws.com/releasewaveweb/releases/images/000/000/017/large/rarity-the-longest-lonesome-music-review-punk-rock-theory.jpg?1553638305',
          },
          artists: [
            {
              id: 18,
              name: 'Rarity',
              bandcamp: '',
              facebook: 'https://www.facebook.com/raritytheband/',
              spotify: 'https://open.spotify.com/artist/2EIhbnEc2cvYIAsXXbo9tg',
              soundcloud: '',
              created_at: '2019-03-26T22:04:33.158Z',
              updated_at: '2019-03-26T22:04:33.158Z',
              image_file_name: 'Rarity_-_2015_620-400-2.jpg',
              image_content_type: 'image/jpeg',
              image_file_size: 86365,
              image_updated_at: '2019-03-26T22:04:32.749Z',
              slug: 'rarity',
              website: 'https://www.raritytheband.com/',
              youtube: '',
              itunes: 'https://itunes.apple.com/us/artist/rarity/969603852',
              twitter: 'https://twitter.com/rarityband',
              short_description: null,
              image: {
                full:
                  '//s3-us-west-2.amazonaws.com/releasewaveweb/artists/images/000/000/018/original/Rarity_-_2015_620-400-2.jpg?1553637872',
                thumb:
                  '//s3-us-west-2.amazonaws.com/releasewaveweb/artists/images/000/000/018/thumb/Rarity_-_2015_620-400-2.jpg?1553637872',
                square:
                  '//s3-us-west-2.amazonaws.com/releasewaveweb/artists/images/000/000/018/square/Rarity_-_2015_620-400-2.jpg?1553637872',
                large:
                  '//s3-us-west-2.amazonaws.com/releasewaveweb/artists/images/000/000/018/large/Rarity_-_2015_620-400-2.jpg?1553637872',
              },
            },
          ],
          embeds: [
            {
              id: 96,
              content:
                '<iframe width="560" height="315" src="https://www.youtube.com/embed/NCoZvtzA0sE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
              created_at: '2019-03-28T23:26:53.075Z',
              updated_at: '2019-03-28T23:26:53.075Z',
            },
            {
              id: 97,
              content: '',
              created_at: '2019-03-28T23:26:53.087Z',
              updated_at: '2019-03-28T23:26:53.087Z',
            },
          ],
        },
        {
          id: 13,
          artist_id: null,
          name: 'What’s Past Is Prologue',
          description:
            '<p>Free Throw return with their 3rd full length LP, What’s Past is Prologue on March 29, 2019, on Triple Crown Records.  Singer and guitarist Cory Castro said about the record “In the two years since the release of ‘Bear Your Mind’, I’ve learned a lot about myself. From being lost in your struggles, to what it takes to find your way back to a good mentality. ‘What’s Past Is Prologue’ tells that story without holding anything back. I hope you all enjoy it.”&nbsp;</p>\n<p>Video and <a href="http://smarturl.it/freethrow" target="_self">pre-orders are available here</a>.&nbsp;</p>\n',
          release_date: '2019-03-29',
          created_at: '2019-03-22T03:36:44.860Z',
          updated_at: '2019-03-24T03:15:39.038Z',
          image_file_name: 'A1362C55-AA94-41AE-95C8-4607FD77A6C6.jpeg',
          image_content_type: 'image/jpeg',
          image_file_size: 91910,
          image_updated_at: '2019-03-22T03:36:44.369Z',
          slug: 'what-s-past-is-prologue',
          buy: 'http://smarturl.it/freethrow',
          short_description:
            '<p><span style="color: rgb(33,37,41);background-color: rgb(254,254,254);font-size: 16px;font-family: proxima-nova, aktiv-grotesk, -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji;">Free Throw return with their 3rd full length LP, What’s Past is Prologue on March 29, 2019, on Triple Crown Records.</span></p>\n',
          featured: null,
          image: {
            full:
              '//s3-us-west-2.amazonaws.com/releasewaveweb/releases/images/000/000/013/original/A1362C55-AA94-41AE-95C8-4607FD77A6C6.jpeg?1553225804',
            thumb:
              '//s3-us-west-2.amazonaws.com/releasewaveweb/releases/images/000/000/013/thumb/A1362C55-AA94-41AE-95C8-4607FD77A6C6.jpeg?1553225804',
            square:
              '//s3-us-west-2.amazonaws.com/releasewaveweb/releases/images/000/000/013/square/A1362C55-AA94-41AE-95C8-4607FD77A6C6.jpeg?1553225804',
            large:
              '//s3-us-west-2.amazonaws.com/releasewaveweb/releases/images/000/000/013/large/A1362C55-AA94-41AE-95C8-4607FD77A6C6.jpeg?1553225804',
          },
          artists: [
            {
              id: 14,
              name: 'Free Throw',
              bandcamp: 'https://freethrowemo.bandcamp.com',
              facebook: 'https://www.facebook.com/freethrowed/',
              spotify: 'https://open.spotify.com/artist/49b68DLRK5eCbtJf7Xx4Cc',
              soundcloud: '',
              created_at: '2019-03-22T03:31:14.505Z',
              updated_at: '2019-03-22T03:31:14.505Z',
              image_file_name: '477A88D2-810E-418C-A88A-648F950CB2DE.jpeg',
              image_content_type: 'image/jpeg',
              image_file_size: 61011,
              image_updated_at: '2019-03-22T03:31:14.051Z',
              slug: 'free-throw',
              website: null,
              youtube: null,
              itunes: null,
              twitter: null,
              short_description: null,
              image: {
                full:
                  '//s3-us-west-2.amazonaws.com/releasewaveweb/artists/images/000/000/014/original/477A88D2-810E-418C-A88A-648F950CB2DE.jpeg?1553225474',
                thumb:
                  '//s3-us-west-2.amazonaws.com/releasewaveweb/artists/images/000/000/014/thumb/477A88D2-810E-418C-A88A-648F950CB2DE.jpeg?1553225474',
                square:
                  '//s3-us-west-2.amazonaws.com/releasewaveweb/artists/images/000/000/014/square/477A88D2-810E-418C-A88A-648F950CB2DE.jpeg?1553225474',
                large:
                  '//s3-us-west-2.amazonaws.com/releasewaveweb/artists/images/000/000/014/large/477A88D2-810E-418C-A88A-648F950CB2DE.jpeg?1553225474',
              },
            },
          ],
          embeds: [],
        },
        {
          id: 12,
          artist_id: null,
          name: 'You Are Ok',
          description:
            '<p>Just days before kicking off their annual 8123 Fest in their home state of Arizona, pop rock veterans The Maine have just announced some major news.</p>\n<p>Coming March 29th, the band will be releasing their seventh full-length album titled You Are OK.</p>\n<p></p>\n',
          release_date: '2019-03-29',
          created_at: '2019-03-22T03:24:45.937Z',
          updated_at: '2019-03-24T03:15:25.432Z',
          image_file_name: 'youareok.png',
          image_content_type: 'image/png',
          image_file_size: 306833,
          image_updated_at: '2019-03-22T03:24:45.102Z',
          slug: 'you-are-ok',
          buy: '',
          short_description:
            '<p><span style="color: rgb(33,37,41);background-color: rgb(254,254,254);font-size: 16px;font-family: proxima-nova, aktiv-grotesk, -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji;">Coming March 29th, the band will be releasing their seventh full-length album titled You Are OK.</span></p>\n',
          featured: null,
          image: {
            full:
              '//s3-us-west-2.amazonaws.com/releasewaveweb/releases/images/000/000/012/original/youareok.png?1553225085',
            thumb:
              '//s3-us-west-2.amazonaws.com/releasewaveweb/releases/images/000/000/012/thumb/youareok.png?1553225085',
            square:
              '//s3-us-west-2.amazonaws.com/releasewaveweb/releases/images/000/000/012/square/youareok.png?1553225085',
            large:
              '//s3-us-west-2.amazonaws.com/releasewaveweb/releases/images/000/000/012/large/youareok.png?1553225085',
          },
          artists: [
            {
              id: 2,
              name: 'The Maine',
              bandcamp: '',
              facebook: 'https://www.facebook.com/themaine/',
              spotify: 'https://open.spotify.com/user/the_maine',
              soundcloud: '',
              created_at: '2019-03-20T03:09:00.937Z',
              updated_at: '2019-03-20T03:09:00.937Z',
              image_file_name: 'The-maine.jpg',
              image_content_type: 'image/jpeg',
              image_file_size: 60587,
              image_updated_at: '2019-03-20T03:09:00.433Z',
              slug: 'the-maine',
              website: null,
              youtube: null,
              itunes: null,
              twitter: null,
              short_description: null,
              image: {
                full:
                  '//s3-us-west-2.amazonaws.com/releasewaveweb/artists/images/000/000/002/original/The-maine.jpg?1553051340',
                thumb:
                  '//s3-us-west-2.amazonaws.com/releasewaveweb/artists/images/000/000/002/thumb/The-maine.jpg?1553051340',
                square:
                  '//s3-us-west-2.amazonaws.com/releasewaveweb/artists/images/000/000/002/square/The-maine.jpg?1553051340',
                large:
                  '//s3-us-west-2.amazonaws.com/releasewaveweb/artists/images/000/000/002/large/The-maine.jpg?1553051340',
              },
            },
          ],
          embeds: [],
        },
      ],
      '04': [
        {
          id: 3,
          artist_id: null,
          name: 'Morbid Stuff',
          description:
            '<p>Toronto punk outfit PUP have announced their third full-length, Morbid Stuff. The follow-up to 2016’s The Dream Is Over is due out April 5th on the band’s new label, Little Dipper (via Rise Records/BMG).</p>\n<p>PUP recorded the album with producer/mixer Dave Schiffman (Weezer, The Mars Volta) as they dug into lead singer Stefan Babcock’s battle with depression. Fans of the band’s playful look at life’s emotional wasteland need not fret, however, as a press release promises the effort contains “all the fury and celebration you’ve come to know, but rooted in understanding of where that fury comes from.” The guys are still teetering on the precipice of complete desolation with manic joy, they’re just more aware of their footing — a state truly befitting the title, when you think about it.</p>\n',
          release_date: '2019-04-05',
          created_at: '2019-03-20T03:27:56.755Z',
          updated_at: '2019-03-24T21:40:53.243Z',
          image_file_name: 'pup-morbid-stuff.jpg',
          image_content_type: 'image/jpeg',
          image_file_size: 91834,
          image_updated_at: '2019-03-20T03:27:56.086Z',
          slug: 'morbid-stuff',
          buy: '',
          short_description:
            '<p><span style="color: rgb(33,37,41);background-color: rgb(254,254,254);font-size: 16px;font-family: proxima-nova, aktiv-grotesk, -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji;">Toronto punk outfit PUP have announced their third full-length, Morbid Stuff. The follow-up to 2016’s The Dream Is Over is due out April 5th on the band’s new label, Little Dipper (via Rise Records/BMG).</span></p>\n',
          featured: true,
          image: {
            full:
              '//s3-us-west-2.amazonaws.com/releasewaveweb/releases/images/000/000/003/original/pup-morbid-stuff.jpg?1553052476',
            thumb:
              '//s3-us-west-2.amazonaws.com/releasewaveweb/releases/images/000/000/003/thumb/pup-morbid-stuff.jpg?1553052476',
            square:
              '//s3-us-west-2.amazonaws.com/releasewaveweb/releases/images/000/000/003/square/pup-morbid-stuff.jpg?1553052476',
            large:
              '//s3-us-west-2.amazonaws.com/releasewaveweb/releases/images/000/000/003/large/pup-morbid-stuff.jpg?1553052476',
          },
          artists: [
            {
              id: 9,
              name: 'Pup',
              bandcamp: '',
              facebook: 'https://www.facebook.com/puptheband/',
              spotify:
                'https://open.spotify.com/artist/6A7uqgC2N1nUhrCLAytHxN?autoplay=true&v=A',
              soundcloud: '',
              created_at: '2019-03-20T03:16:10.900Z',
              updated_at: '2019-03-20T03:16:10.900Z',
              image_file_name: 'pup.jpg',
              image_content_type: 'image/jpeg',
              image_file_size: 84032,
              image_updated_at: '2019-03-20T03:16:10.392Z',
              slug: 'pup',
              website: null,
              youtube: null,
              itunes: null,
              twitter: null,
              short_description: null,
              image: {
                full:
                  '//s3-us-west-2.amazonaws.com/releasewaveweb/artists/images/000/000/009/original/pup.jpg?1553051770',
                thumb:
                  '//s3-us-west-2.amazonaws.com/releasewaveweb/artists/images/000/000/009/thumb/pup.jpg?1553051770',
                square:
                  '//s3-us-west-2.amazonaws.com/releasewaveweb/artists/images/000/000/009/square/pup.jpg?1553051770',
                large:
                  '//s3-us-west-2.amazonaws.com/releasewaveweb/artists/images/000/000/009/large/pup.jpg?1553051770',
              },
            },
          ],
          embeds: [
            {
              id: 60,
              content:
                '<iframe width="560" height="315" src="https://www.youtube.com/embed/EqTNdUOE1wo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
              created_at: '2019-03-24T21:40:53.283Z',
              updated_at: '2019-03-24T21:40:53.283Z',
            },
          ],
        },
        {
          id: 11,
          artist_id: null,
          name: 'Interview Music',
          description:
            '<p>Idlewild have announced their first album in four years with ‘Interview Music’, as well sharing their first single ‘Dream Variations’. Their second single drops March 22nd. The Scottish indie rockers will release their eighth album on April 5, 2019. Listen to the single and <a href="https://orcd.co/interviewmusic" target="_self">pre-order the album here</a> .&nbsp;</p>\n',
          release_date: '2019-04-05',
          created_at: '2019-03-22T02:28:18.446Z',
          updated_at: '2019-03-22T02:32:52.946Z',
          image_file_name: '4259C736-471F-402C-B352-426F02F3D4F5.jpeg',
          image_content_type: 'image/jpeg',
          image_file_size: 47584,
          image_updated_at: '2019-03-22T02:28:17.977Z',
          slug: 'interview-music',
          buy: null,
          short_description: null,
          featured: null,
          image: {
            full:
              '//s3-us-west-2.amazonaws.com/releasewaveweb/releases/images/000/000/011/original/4259C736-471F-402C-B352-426F02F3D4F5.jpeg?1553221697',
            thumb:
              '//s3-us-west-2.amazonaws.com/releasewaveweb/releases/images/000/000/011/thumb/4259C736-471F-402C-B352-426F02F3D4F5.jpeg?1553221697',
            square:
              '//s3-us-west-2.amazonaws.com/releasewaveweb/releases/images/000/000/011/square/4259C736-471F-402C-B352-426F02F3D4F5.jpeg?1553221697',
            large:
              '//s3-us-west-2.amazonaws.com/releasewaveweb/releases/images/000/000/011/large/4259C736-471F-402C-B352-426F02F3D4F5.jpeg?1553221697',
          },
          artists: [
            {
              id: 13,
              name: 'Idlewild',
              bandcamp: '',
              facebook: 'https://www.facebook.com/IdlewildTheBand/',
              spotify: 'https://open.spotify.com/artist/1xdB9gS1NrKEYgZUEfoqIw',
              soundcloud: 'https://soundcloud.com/idlewildtheband',
              created_at: '2019-03-22T02:18:25.036Z',
              updated_at: '2019-03-22T02:18:25.036Z',
              image_file_name: '32F93992-81E9-4C4B-AB66-32AF0106DDF8.jpeg',
              image_content_type: 'image/jpeg',
              image_file_size: 65287,
              image_updated_at: '2019-03-22T02:18:24.638Z',
              slug: 'idlewild',
              website: null,
              youtube: null,
              itunes: null,
              twitter: null,
              short_description: null,
              image: {
                full:
                  '//s3-us-west-2.amazonaws.com/releasewaveweb/artists/images/000/000/013/original/32F93992-81E9-4C4B-AB66-32AF0106DDF8.jpeg?1553221104',
                thumb:
                  '//s3-us-west-2.amazonaws.com/releasewaveweb/artists/images/000/000/013/thumb/32F93992-81E9-4C4B-AB66-32AF0106DDF8.jpeg?1553221104',
                square:
                  '//s3-us-west-2.amazonaws.com/releasewaveweb/artists/images/000/000/013/square/32F93992-81E9-4C4B-AB66-32AF0106DDF8.jpeg?1553221104',
                large:
                  '//s3-us-west-2.amazonaws.com/releasewaveweb/artists/images/000/000/013/large/32F93992-81E9-4C4B-AB66-32AF0106DDF8.jpeg?1553221104',
              },
            },
          ],
          embeds: [
            {
              id: 22,
              content:
                '<iframe width="560" height="315" src="https://www.youtube.com/embed/wTxuSAwQvsU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
              created_at: '2019-03-22T02:35:42.734Z',
              updated_at: '2019-03-22T02:35:42.734Z',
            },
          ],
        },
        {
          id: 4,
          artist_id: null,
          name: 'The Ceiling',
          description:
            '<p>Birmingham trio Jaws return with their forthcoming third album The Ceiling, which will be released on April 5th 2019.  The album was once again recorded with Gethin Pearson who also worked on their previous and spectacular album Simplicity (2016). Listen to the first three singles Driving At Night, Do You Remember, and Fear below. The three songs showcase classic Jaws while still offering diversity and some new exploration and experimentation as well.&nbsp;</p>\n',
          release_date: '2019-04-05',
          created_at: '2019-03-20T03:30:06.581Z',
          updated_at: '2019-04-04T15:07:43.393Z',
          image_file_name: 'jaws-the-ceiling.jpg',
          image_content_type: 'image/jpeg',
          image_file_size: 129325,
          image_updated_at: '2019-03-20T03:30:05.961Z',
          slug: 'the-ceiling',
          buy: 'https://ffm.to/theceiling',
          short_description:
            '<p><span style="color: rgb(33,37,41);background-color: rgb(254,254,254);font-size: 16px;font-family: proxima-nova, aktiv-grotesk, -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji;">Birmingham trio Jaws return with their forthcoming third album The Ceiling, which will be released on April 5th 2019. </span></p>\n',
          featured: true,
          image: {
            full:
              '//s3-us-west-2.amazonaws.com/releasewaveweb/releases/images/000/000/004/original/jaws-the-ceiling.jpg?1553052605',
            thumb:
              '//s3-us-west-2.amazonaws.com/releasewaveweb/releases/images/000/000/004/thumb/jaws-the-ceiling.jpg?1553052605',
            square:
              '//s3-us-west-2.amazonaws.com/releasewaveweb/releases/images/000/000/004/square/jaws-the-ceiling.jpg?1553052605',
            large:
              '//s3-us-west-2.amazonaws.com/releasewaveweb/releases/images/000/000/004/large/jaws-the-ceiling.jpg?1553052605',
          },
          artists: [
            {
              id: 8,
              name: 'JAWS',
              bandcamp: '',
              facebook: 'https://www.facebook.com/JAWSJAWSJAWSJAWS/',
              spotify:
                'https://open.spotify.com/artist/3E3NOIlw2s1ZPU9GRB9jaq?autoplay=true&v=A',
              soundcloud: '',
              created_at: '2019-03-20T03:15:16.571Z',
              updated_at: '2019-03-24T00:23:32.927Z',
              image_file_name: 'jaws.jpg',
              image_content_type: 'image/jpeg',
              image_file_size: 120679,
              image_updated_at: '2019-03-20T03:15:16.014Z',
              slug: 'jaws',
              website: 'http://www.jawsjawsjaws.co.uk/',
              youtube: '',
              itunes: '',
              twitter: 'https://twitter.com/JAWSJAWSJAWSSS',
              short_description: null,
              image: {
                full:
                  '//s3-us-west-2.amazonaws.com/releasewaveweb/artists/images/000/000/008/original/jaws.jpg?1553051716',
                thumb:
                  '//s3-us-west-2.amazonaws.com/releasewaveweb/artists/images/000/000/008/thumb/jaws.jpg?1553051716',
                square:
                  '//s3-us-west-2.amazonaws.com/releasewaveweb/artists/images/000/000/008/square/jaws.jpg?1553051716',
                large:
                  '//s3-us-west-2.amazonaws.com/releasewaveweb/artists/images/000/000/008/large/jaws.jpg?1553051716',
              },
            },
          ],
          embeds: [
            {
              id: 98,
              content:
                '<iframe width="560" height="315" src="https://www.youtube.com/embed/DtLVG782q9A" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
              created_at: '2019-04-04T15:07:43.466Z',
              updated_at: '2019-04-04T15:07:43.466Z',
            },
            {
              id: 99,
              content:
                '<iframe width="560" height="315" src="https://www.youtube.com/embed/F7jDsMJrvFg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
              created_at: '2019-04-04T15:07:43.481Z',
              updated_at: '2019-04-04T15:07:43.481Z',
            },
            {
              id: 100,
              content:
                '<iframe width="560" height="315" src="https://www.youtube.com/embed/qbkeTVAETts" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
              created_at: '2019-04-04T15:07:43.496Z',
              updated_at: '2019-04-04T15:07:43.496Z',
            },
          ],
        },
        {
          id: 2,
          artist_id: null,
          name: 'Steady Glow',
          description:
            "<p><span style=\"color: rgb(33,37,41);background-color: rgb(254,254,254);font-size: 16px;\">In Her Own Words have announced their 2nd LP, Steady Glow, as a follow up to their well received debut 'Unfamiliar'. The California natives have set a release date of April 12th, 2019. The band will be bringing their accessible brand of melodic and emotive pop punk to Europe this April with Stand Atlantic after finishing up a West Coast tour with Oh Weatherly. Both new singles including the title track 'Stead Glow' from the forthcoming LP can be heard below.</span></p>\n",
          release_date: '2019-04-12',
          created_at: '2019-03-20T03:25:40.696Z',
          updated_at: '2019-03-25T21:24:20.185Z',
          image_file_name: 'steady-glow.jpg',
          image_content_type: 'image/jpeg',
          image_file_size: 34543,
          image_updated_at: '2019-03-20T03:25:40.249Z',
          slug: 'steady-glow',
          buy: 'https://invoguerecords.merchnow.com/',
          short_description:
            '<p><span style="color: rgb(33,37,41);background-color: rgb(254,254,254);font-size: 16px;font-family: proxima-nova, aktiv-grotesk, -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji;">In Her Own Words have announced their 2nd LP, Steady Glow, as a follow up to their well received debut \'Unfamiliar\'. The California natives have set a release date of April 12th, 2019. The band will be bringing their accessible brand of melodic and emotive pop punk to Europe this April with Stand Atlantic after finishing up a West Coast tour with Oh Weatherly.</span></p>\n',
          featured: true,
          image: {
            full:
              '//s3-us-west-2.amazonaws.com/releasewaveweb/releases/images/000/000/002/original/steady-glow.jpg?1553052340',
            thumb:
              '//s3-us-west-2.amazonaws.com/releasewaveweb/releases/images/000/000/002/thumb/steady-glow.jpg?1553052340',
            square:
              '//s3-us-west-2.amazonaws.com/releasewaveweb/releases/images/000/000/002/square/steady-glow.jpg?1553052340',
            large:
              '//s3-us-west-2.amazonaws.com/releasewaveweb/releases/images/000/000/002/large/steady-glow.jpg?1553052340',
          },
          artists: [
            {
              id: 6,
              name: 'In Her Own Words',
              bandcamp: '',
              facebook: 'https://www.facebook.com/ihowband/',
              spotify:
                'https://open.spotify.com/artist/3NBHNlkwYabSLvnisILPSI?autoplay=true&v=A',
              soundcloud: '',
              created_at: '2019-03-20T03:13:44.287Z',
              updated_at: '2019-03-25T21:18:18.134Z',
              image_file_name: 'inherownwords.jpg',
              image_content_type: 'image/jpeg',
              image_file_size: 55989,
              image_updated_at: '2019-03-20T03:13:43.639Z',
              slug: 'in-her-own-words',
              website: 'https://www.ihowmerch.com/',
              youtube: '',
              itunes: '',
              twitter: '',
              short_description: null,
              image: {
                full:
                  '//s3-us-west-2.amazonaws.com/releasewaveweb/artists/images/000/000/006/original/inherownwords.jpg?1553051623',
                thumb:
                  '//s3-us-west-2.amazonaws.com/releasewaveweb/artists/images/000/000/006/thumb/inherownwords.jpg?1553051623',
                square:
                  '//s3-us-west-2.amazonaws.com/releasewaveweb/artists/images/000/000/006/square/inherownwords.jpg?1553051623',
                large:
                  '//s3-us-west-2.amazonaws.com/releasewaveweb/artists/images/000/000/006/large/inherownwords.jpg?1553051623',
              },
            },
          ],
          embeds: [
            {
              id: 73,
              content:
                '<iframe width="560" height="315" src="https://www.youtube.com/embed/Q6P4-tl7p-k" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
              created_at: '2019-03-25T21:24:20.252Z',
              updated_at: '2019-03-25T21:24:20.252Z',
            },
            {
              id: 74,
              content:
                '<iframe width="560" height="315" src="https://www.youtube.com/embed/zdbjEjgrNV8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
              created_at: '2019-03-25T21:24:20.267Z',
              updated_at: '2019-03-25T21:24:20.267Z',
            },
            {
              id: 75,
              content: '',
              created_at: '2019-03-25T21:24:20.281Z',
              updated_at: '2019-03-25T21:24:20.281Z',
            },
          ],
        },
        {
          id: 18,
          artist_id: null,
          name: "You Swear It's Getting Better Every Day",
          description:
            '<p>Kayak Jones will <span style="color: rgb(33,37,41);background-color: rgb(254,254,254);font-size: 16px;">independently </span>release their debut LP ‘You Swear It’s Getting Better Every Day’ on April 19th. The new single “The Mess I’ve Made” is available on all streaming platforms and can be streamed below.</p>\n',
          release_date: '2019-04-19',
          created_at: '2019-03-27T16:32:14.827Z',
          updated_at: '2019-03-27T16:34:42.811Z',
          image_file_name: 'KJ.jpg',
          image_content_type: 'image/jpeg',
          image_file_size: 72170,
          image_updated_at: '2019-03-27T16:32:14.092Z',
          slug: 'you-swear-it-s-getting-better-every-day',
          buy: 'https://kayakjones.limitedrun.com/',
          short_description:
            '<p><span style="color: rgb(33,37,41);background-color: rgb(254,254,254);font-size: 16px;font-family: proxima-nova, aktiv-grotesk, -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji;">Kayak Jones will independently release their debut LP ‘You Swear It’s Getting Better Every Day’ on April 19th. The new single “The Mess I’ve Made” is available on all streaming platforms and can be streamed below.</span></p>\n',
          featured: true,
          image: {
            full:
              '//s3-us-west-2.amazonaws.com/releasewaveweb/releases/images/000/000/018/original/KJ.jpg?1553704334',
            thumb:
              '//s3-us-west-2.amazonaws.com/releasewaveweb/releases/images/000/000/018/thumb/KJ.jpg?1553704334',
            square:
              '//s3-us-west-2.amazonaws.com/releasewaveweb/releases/images/000/000/018/square/KJ.jpg?1553704334',
            large:
              '//s3-us-west-2.amazonaws.com/releasewaveweb/releases/images/000/000/018/large/KJ.jpg?1553704334',
          },
          artists: [
            {
              id: 19,
              name: 'Kayak Jones',
              bandcamp: 'https://kayakjones.bandcamp.com/',
              facebook: 'https://www.facebook.com/kayakjonesIA/',
              spotify: 'https://open.spotify.com/artist/3adoUmYo7HrLl98fB1nnhW',
              soundcloud: '',
              created_at: '2019-03-27T16:13:07.635Z',
              updated_at: '2019-03-27T16:13:07.635Z',
              image_file_name: 'Kayak.jpg',
              image_content_type: 'image/jpeg',
              image_file_size: 84992,
              image_updated_at: '2019-03-27T16:13:07.002Z',
              slug: 'kayak-jones',
              website: 'https://kayakjones.limitedrun.com/',
              youtube: 'https://www.youtube.com/watch?v=An2DQP5TAcM&feature=youtu.be',
              itunes: 'https://itunes.apple.com/us/artist/kayak-jones/1031834938',
              twitter: 'https://twitter.com/kayakjonesia',
              short_description: null,
              image: {
                full:
                  '//s3-us-west-2.amazonaws.com/releasewaveweb/artists/images/000/000/019/original/Kayak.jpg?1553703187',
                thumb:
                  '//s3-us-west-2.amazonaws.com/releasewaveweb/artists/images/000/000/019/thumb/Kayak.jpg?1553703187',
                square:
                  '//s3-us-west-2.amazonaws.com/releasewaveweb/artists/images/000/000/019/square/Kayak.jpg?1553703187',
                large:
                  '//s3-us-west-2.amazonaws.com/releasewaveweb/artists/images/000/000/019/large/Kayak.jpg?1553703187',
              },
            },
          ],
          embeds: [
            {
              id: 91,
              content:
                '<iframe width="560" height="315" src="https://www.youtube.com/embed/An2DQP5TAcM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
              created_at: '2019-03-27T16:34:42.854Z',
              updated_at: '2019-03-27T16:34:42.854Z',
            },
          ],
        },
        {
          id: 10,
          artist_id: null,
          name: 'Fake Blood',
          description:
            "<p>Cleveland OH's Heart Attack Man will release their sophomore LP 'Fake Blood' on April 19 via You Did This/Triple Crown Records.</p>\n",
          release_date: '2019-04-19',
          created_at: '2019-03-20T21:04:50.255Z',
          updated_at: '2019-03-25T21:30:49.048Z',
          image_file_name: 'heart-attack-man-fake-bloody.jpg',
          image_content_type: 'image/jpeg',
          image_file_size: 38945,
          image_updated_at: '2019-03-20T21:04:49.661Z',
          slug: 'fake-blood',
          buy: 'https://heartattackmanofficial.limitedrun.com/store',
          short_description:
            '<p><span style="color: rgb(33,37,41);background-color: rgb(254,254,254);font-size: 16px;font-family: proxima-nova, aktiv-grotesk, -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji;">Cleveland OH\'s Heart Attack Man will release their sophomore LP \'Fake Blood\' on April 19 via You Did This/Triple Crown Records.</span></p>\n',
          featured: false,
          image: {
            full:
              '//s3-us-west-2.amazonaws.com/releasewaveweb/releases/images/000/000/010/original/heart-attack-man-fake-bloody.jpg?1553115889',
            thumb:
              '//s3-us-west-2.amazonaws.com/releasewaveweb/releases/images/000/000/010/thumb/heart-attack-man-fake-bloody.jpg?1553115889',
            square:
              '//s3-us-west-2.amazonaws.com/releasewaveweb/releases/images/000/000/010/square/heart-attack-man-fake-bloody.jpg?1553115889',
            large:
              '//s3-us-west-2.amazonaws.com/releasewaveweb/releases/images/000/000/010/large/heart-attack-man-fake-bloody.jpg?1553115889',
          },
          artists: [
            {
              id: 10,
              name: 'Heart Attack Man',
              bandcamp: 'https://heartattackman.bandcamp.com/album/heart-attack-man',
              facebook: 'https://www.facebook.com/heartattackmane/',
              spotify:
                'https://open.spotify.com/artist/5esKrGWvWmBAmjnao5jInN?autoplay=true&v=A',
              soundcloud: '',
              created_at: '2019-03-20T03:17:10.097Z',
              updated_at: '2019-03-25T21:32:04.775Z',
              image_file_name: 'heartattackman.jpg',
              image_content_type: 'image/jpeg',
              image_file_size: 113164,
              image_updated_at: '2019-03-20T03:17:09.642Z',
              slug: 'heart-attack-man',
              website: 'http://triplecrownrecords.com',
              youtube: '',
              itunes: '',
              twitter: 'https://twitter.com/HeartAttackMane',
              short_description: null,
              image: {
                full:
                  '//s3-us-west-2.amazonaws.com/releasewaveweb/artists/images/000/000/010/original/heartattackman.jpg?1553051829',
                thumb:
                  '//s3-us-west-2.amazonaws.com/releasewaveweb/artists/images/000/000/010/thumb/heartattackman.jpg?1553051829',
                square:
                  '//s3-us-west-2.amazonaws.com/releasewaveweb/artists/images/000/000/010/square/heartattackman.jpg?1553051829',
                large:
                  '//s3-us-west-2.amazonaws.com/releasewaveweb/artists/images/000/000/010/large/heartattackman.jpg?1553051829',
              },
            },
          ],
          embeds: [
            {
              id: 76,
              content:
                '<iframe width="560" height="315" src="https://www.youtube.com/embed/nhtYEPcTT0U" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
              created_at: '2019-03-25T21:30:49.106Z',
              updated_at: '2019-03-25T21:30:49.106Z',
            },
          ],
        },
        {
          id: 14,
          artist_id: null,
          name: 'Your Church On My Bonfire',
          description:
            '<p>Glasgow trio will drop their fourth album YOUR CHURCH ON MY BONFIRE on April 26th on Ernest Jenning Records. The follow up to the Mark Hoppus produced punked up aggression of No Grace<em> </em>was recorded and produced in Scotland in October 2018, this time by Andy Monaghan of Frightened Rabbit.&nbsp;</p>\n',
          release_date: '2019-04-26',
          created_at: '2019-03-23T15:14:30.264Z',
          updated_at: '2019-03-24T21:39:52.229Z',
          image_file_name: 'Paws.jpg',
          image_content_type: 'image/jpeg',
          image_file_size: 341334,
          image_updated_at: '2019-03-23T15:14:29.581Z',
          slug: 'your-church-on-my-bonfire',
          buy: 'https://wehavepaws.bandcamp.com/album/your-church-on-my-bonfire',
          short_description: '',
          featured: true,
          image: {
            full:
              '//s3-us-west-2.amazonaws.com/releasewaveweb/releases/images/000/000/014/original/Paws.jpg?1553354069',
            thumb:
              '//s3-us-west-2.amazonaws.com/releasewaveweb/releases/images/000/000/014/thumb/Paws.jpg?1553354069',
            square:
              '//s3-us-west-2.amazonaws.com/releasewaveweb/releases/images/000/000/014/square/Paws.jpg?1553354069',
            large:
              '//s3-us-west-2.amazonaws.com/releasewaveweb/releases/images/000/000/014/large/Paws.jpg?1553354069',
          },
          artists: [
            {
              id: 15,
              name: 'Paws',
              bandcamp: 'https://wehavepaws.bandcamp.com/',
              facebook: 'https://www.facebook.com/wehavepaws/',
              spotify: 'https://open.spotify.com/artist/7lBWdR4AAQLNYYXGTu6jpa',
              soundcloud: '',
              created_at: '2019-03-23T15:03:02.360Z',
              updated_at: '2019-03-23T15:03:02.360Z',
              image_file_name: 'PAWS.jpg',
              image_content_type: 'image/jpeg',
              image_file_size: 510616,
              image_updated_at: '2019-03-23T15:03:01.223Z',
              slug: 'paws',
              website: 'http://www.wehavepaws.com/',
              youtube: '',
              itunes: 'https://itunes.apple.com/us/artist/paws/430668822',
              twitter:
                ' https://twitter.com/wehavepaws?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor',
              short_description: null,
              image: {
                full:
                  '//s3-us-west-2.amazonaws.com/releasewaveweb/artists/images/000/000/015/original/PAWS.jpg?1553353381',
                thumb:
                  '//s3-us-west-2.amazonaws.com/releasewaveweb/artists/images/000/000/015/thumb/PAWS.jpg?1553353381',
                square:
                  '//s3-us-west-2.amazonaws.com/releasewaveweb/artists/images/000/000/015/square/PAWS.jpg?1553353381',
                large:
                  '//s3-us-west-2.amazonaws.com/releasewaveweb/artists/images/000/000/015/large/PAWS.jpg?1553353381',
              },
            },
          ],
          embeds: [
            {
              id: 58,
              content:
                '<iframe width="560" height="315" src="https://www.youtube.com/embed/cow0Zfymy20" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
              created_at: '2019-03-24T21:39:52.276Z',
              updated_at: '2019-03-24T21:39:52.276Z',
            },
          ],
        },
        {
          id: 5,
          artist_id: null,
          name: 'Violet Street',
          description:
            '<p>After sharing demos, announcing a tour, and dropping a new single in “Café Amarillo”, Local Natives have formerly announced their highly anticipated follow-up to their 2016 full-length LP, Sunlit Youth. It’s titled Violet Street and due out April 26th via Loma Vista.</p>\n<p>Produced by Shawn Everett (Alabama Shakes, Kacey Musgraves), the band’s fourth studio album finds the Silver Lake outfit chewing on the existential question, “With all of the chaos in the world, where do you find your shelter?”</p>\n',
          release_date: '2019-04-26',
          created_at: '2019-03-20T03:31:46.686Z',
          updated_at: '2019-03-20T03:56:02.721Z',
          image_file_name: '143305-violet-street.jpg',
          image_content_type: 'image/jpeg',
          image_file_size: 265237,
          image_updated_at: '2019-03-20T03:31:46.073Z',
          slug: 'violet-street',
          buy: null,
          short_description: null,
          featured: null,
          image: {
            full:
              '//s3-us-west-2.amazonaws.com/releasewaveweb/releases/images/000/000/005/original/143305-violet-street.jpg?1553052706',
            thumb:
              '//s3-us-west-2.amazonaws.com/releasewaveweb/releases/images/000/000/005/thumb/143305-violet-street.jpg?1553052706',
            square:
              '//s3-us-west-2.amazonaws.com/releasewaveweb/releases/images/000/000/005/square/143305-violet-street.jpg?1553052706',
            large:
              '//s3-us-west-2.amazonaws.com/releasewaveweb/releases/images/000/000/005/large/143305-violet-street.jpg?1553052706',
          },
          artists: [
            {
              id: 5,
              name: 'Local Natives',
              bandcamp: '',
              facebook: '',
              spotify:
                'https://open.spotify.com/artist/75dQReiBOHN37fQgWQrIAJ?autoplay=true&v=A',
              soundcloud: '',
              created_at: '2019-03-20T03:12:47.305Z',
              updated_at: '2019-03-20T03:12:47.305Z',
              image_file_name: 'local-natives.jpg',
              image_content_type: 'image/jpeg',
              image_file_size: 88727,
              image_updated_at: '2019-03-20T03:12:46.849Z',
              slug: 'local-natives',
              website: null,
              youtube: null,
              itunes: null,
              twitter: null,
              short_description: null,
              image: {
                full:
                  '//s3-us-west-2.amazonaws.com/releasewaveweb/artists/images/000/000/005/original/local-natives.jpg?1553051566',
                thumb:
                  '//s3-us-west-2.amazonaws.com/releasewaveweb/artists/images/000/000/005/thumb/local-natives.jpg?1553051566',
                square:
                  '//s3-us-west-2.amazonaws.com/releasewaveweb/artists/images/000/000/005/square/local-natives.jpg?1553051566',
                large:
                  '//s3-us-west-2.amazonaws.com/releasewaveweb/artists/images/000/000/005/large/local-natives.jpg?1553051566',
              },
            },
          ],
          embeds: [
            {
              id: 11,
              content:
                '<iframe width="560" height="315" src="https://www.youtube.com/embed/oWwytT5JAdM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
              created_at: '2019-03-20T03:56:02.772Z',
              updated_at: '2019-03-20T03:56:02.772Z',
            },
          ],
        },
        {
          id: 6,
          artist_id: null,
          name: 'Certain Freedoms',
          description:
            "<p>Trade Wind have a new album by the name of “Certain Freedoms” headed for an April 26th release on Other People Records. The band feature members of Stick To Your Guns, Stray From The Path and more among their ranks and have debuted a new single from it titled “No King But Me” below. A limited edition 7″ for the track is available now through certainfreedoms.com.  You can also watch the video for the 2nd single of \"Certain Freedoms\" called 'I Can't Believe You're Gone' below as well. The band will be overseas on a European/UK tour in the spring.</p>\n",
          release_date: '2019-04-26',
          created_at: '2019-03-20T03:33:14.753Z',
          updated_at: '2019-03-26T21:15:01.928Z',
          image_file_name: 'trade-wind-certain.jpeg',
          image_content_type: 'image/jpeg',
          image_file_size: 5854,
          image_updated_at: '2019-03-20T03:33:14.383Z',
          slug: 'certain-freedoms',
          buy: 'http://certainfreedoms.com/',
          short_description: '',
          featured: true,
          image: {
            full:
              '//s3-us-west-2.amazonaws.com/releasewaveweb/releases/images/000/000/006/original/trade-wind-certain.jpeg?1553052794',
            thumb:
              '//s3-us-west-2.amazonaws.com/releasewaveweb/releases/images/000/000/006/thumb/trade-wind-certain.jpeg?1553052794',
            square:
              '//s3-us-west-2.amazonaws.com/releasewaveweb/releases/images/000/000/006/square/trade-wind-certain.jpeg?1553052794',
            large:
              '//s3-us-west-2.amazonaws.com/releasewaveweb/releases/images/000/000/006/large/trade-wind-certain.jpeg?1553052794',
          },
          artists: [
            {
              id: 7,
              name: 'Trade Wind',
              bandcamp: 'https://tradewind.bandcamp.com/',
              facebook: 'https://www.facebook.com/Tradewindband/',
              spotify:
                'https://open.spotify.com/artist/3FCfL4lKWE7vm3mCcOd570?autoplay=true&v=A',
              soundcloud: '',
              created_at: '2019-03-20T03:14:28.555Z',
              updated_at: '2019-03-26T21:18:52.146Z',
              image_file_name: 'trade-wind.jpg',
              image_content_type: 'image/jpeg',
              image_file_size: 647499,
              image_updated_at: '2019-03-20T03:14:27.772Z',
              slug: 'trade-wind',
              website: 'http://certainfreedoms.com/',
              youtube: '',
              itunes: '',
              twitter:
                'https://twitter.com/Tradewindband?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor',
              short_description: null,
              image: {
                full:
                  '//s3-us-west-2.amazonaws.com/releasewaveweb/artists/images/000/000/007/original/trade-wind.jpg?1553051667',
                thumb:
                  '//s3-us-west-2.amazonaws.com/releasewaveweb/artists/images/000/000/007/thumb/trade-wind.jpg?1553051667',
                square:
                  '//s3-us-west-2.amazonaws.com/releasewaveweb/artists/images/000/000/007/square/trade-wind.jpg?1553051667',
                large:
                  '//s3-us-west-2.amazonaws.com/releasewaveweb/artists/images/000/000/007/large/trade-wind.jpg?1553051667',
              },
            },
          ],
          embeds: [
            {
              id: 85,
              content:
                '<iframe width="560" height="315" src="https://www.youtube.com/embed/dYxaMg9dIwo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
              created_at: '2019-03-26T21:15:01.991Z',
              updated_at: '2019-03-26T21:15:01.991Z',
            },
            {
              id: 86,
              content:
                '<iframe width="560" height="315" src="https://www.youtube.com/embed/nKd_qQDm9Og" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
              created_at: '2019-03-26T21:15:02.008Z',
              updated_at: '2019-03-26T21:15:02.008Z',
            },
          ],
        },
        {
          id: 15,
          artist_id: null,
          name: 'We Are A Team',
          description:
            '<p>Melbourne Australia\'s emotionally driven indie pop-punk favorites Ceres will release their new album "We Are A Team" on April 26, 2019 on Cooking Vinyl Australia.  Click the pre-order button to the right to get your hands on this on this one!</p>\n',
          release_date: '2019-04-26',
          created_at: '2019-03-23T15:49:36.110Z',
          updated_at: '2019-03-23T16:10:32.372Z',
          image_file_name: 'Ceres.jpg',
          image_content_type: 'image/jpeg',
          image_file_size: 50434,
          image_updated_at: '2019-03-23T15:49:35.493Z',
          slug: 'we-are-a-team',
          buy: 'https://ceresband.bandcamp.com/album/we-are-a-team',
          short_description: null,
          featured: null,
          image: {
            full:
              '//s3-us-west-2.amazonaws.com/releasewaveweb/releases/images/000/000/015/original/Ceres.jpg?1553356175',
            thumb:
              '//s3-us-west-2.amazonaws.com/releasewaveweb/releases/images/000/000/015/thumb/Ceres.jpg?1553356175',
            square:
              '//s3-us-west-2.amazonaws.com/releasewaveweb/releases/images/000/000/015/square/Ceres.jpg?1553356175',
            large:
              '//s3-us-west-2.amazonaws.com/releasewaveweb/releases/images/000/000/015/large/Ceres.jpg?1553356175',
          },
          artists: [
            {
              id: 16,
              name: 'Ceres',
              bandcamp: 'https://ceresband.bandcamp.com/ ',
              facebook: 'https://www.facebook.com/ceresband/',
              spotify: 'https://open.spotify.com/artist/6ignu1FESsoUapE3EnbCFL',
              soundcloud: '',
              created_at: '2019-03-23T15:40:40.883Z',
              updated_at: '2019-03-23T15:40:40.883Z',
              image_file_name: 'Ceres-band.jpg',
              image_content_type: 'image/jpeg',
              image_file_size: 144151,
              image_updated_at: '2019-03-23T15:40:40.406Z',
              slug: 'ceres',
              website: ' http://weareceres.com',
              youtube: '',
              itunes: 'https://itunes.apple.com/us/artist/ceres/1126229787',
              twitter: 'https://twitter.com/weareceres?lang=en',
              short_description: null,
              image: {
                full:
                  '//s3-us-west-2.amazonaws.com/releasewaveweb/artists/images/000/000/016/original/Ceres-band.jpg?1553355640',
                thumb:
                  '//s3-us-west-2.amazonaws.com/releasewaveweb/artists/images/000/000/016/thumb/Ceres-band.jpg?1553355640',
                square:
                  '//s3-us-west-2.amazonaws.com/releasewaveweb/artists/images/000/000/016/square/Ceres-band.jpg?1553355640',
                large:
                  '//s3-us-west-2.amazonaws.com/releasewaveweb/artists/images/000/000/016/large/Ceres-band.jpg?1553355640',
              },
            },
          ],
          embeds: [
            {
              id: 37,
              content:
                '<iframe width="560" height="315" src="https://www.youtube.com/embed/ENgRpjbAJTU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
              created_at: '2019-03-23T16:10:32.419Z',
              updated_at: '2019-03-23T16:10:32.419Z',
            },
            {
              id: 38,
              content:
                '<iframe width="560" height="315" src="https://www.youtube.com/embed/Aw4-G9zXAbU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
              created_at: '2019-03-23T16:10:32.432Z',
              updated_at: '2019-03-23T16:10:32.432Z',
            },
            {
              id: 39,
              content:
                '<iframe width="560" height="315" src="https://www.youtube.com/embed/MqvhxrK43yA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
              created_at: '2019-03-23T16:10:32.442Z',
              updated_at: '2019-03-23T16:10:32.442Z',
            },
          ],
        },
        {
          id: 16,
          artist_id: null,
          name: 'To Hell With This Delicate Equation',
          description:
            "<p>The Story Changes (Mark McMillon and Christopher Popadak of Hawthorne Heights and Chris Serafini of The Stereo) are set to release their brand new LP 'To Hell With This Delicate Equation' on April 26 via Ohio-based Magnaphone Records. Featuring members of Hawthorne Heights (Mark McMillon and Christopher Popadak) and The Stereo (Chris Serafini), Dayton, Ohio natives The Story Changes’ newest album ‘To Hell With this Delicate Equation’ is an energetic blend of late 90’s/early 2000’s emo, modern rock, and a moody aggressiveness that supplies a gritty edge in all the right places. The album was mixed by longtime friend Jamie Woolford (Gin Blossoms, The Smoking Popes, Punchline). The first single 'Shooting Stars' can be found below.</p>\n",
          release_date: '2019-04-26',
          created_at: '2019-03-25T20:49:01.380Z',
          updated_at: '2019-03-26T00:50:39.691Z',
          image_file_name: 'unnamed.jpg',
          image_content_type: 'image/jpeg',
          image_file_size: 252999,
          image_updated_at: '2019-03-25T20:49:00.727Z',
          slug: 'to-hell-with-this-delicate-equation',
          buy: 'http://www.thestorychanges.com/',
          short_description: '<p style="text-align:left;"></p>\n',
          featured: true,
          image: {
            full:
              '//s3-us-west-2.amazonaws.com/releasewaveweb/releases/images/000/000/016/original/unnamed.jpg?1553546940',
            thumb:
              '//s3-us-west-2.amazonaws.com/releasewaveweb/releases/images/000/000/016/thumb/unnamed.jpg?1553546940',
            square:
              '//s3-us-west-2.amazonaws.com/releasewaveweb/releases/images/000/000/016/square/unnamed.jpg?1553546940',
            large:
              '//s3-us-west-2.amazonaws.com/releasewaveweb/releases/images/000/000/016/large/unnamed.jpg?1553546940',
          },
          artists: [
            {
              id: 17,
              name: 'The Story Changes',
              bandcamp: 'https://thestorychanges.bandcamp.com/',
              facebook: 'https://www.facebook.com/thestorychanges/',
              spotify: 'https://open.spotify.com/artist/4ESrVjoUNUtw0QUZl6t3nF',
              soundcloud: '',
              created_at: '2019-03-25T20:42:48.970Z',
              updated_at: '2019-03-25T20:42:48.970Z',
              image_file_name: 'The-Story-Changes-band-2016.jpg',
              image_content_type: 'image/jpeg',
              image_file_size: 242464,
              image_updated_at: '2019-03-25T20:42:48.233Z',
              slug: 'the-story-changes',
              website: 'http://www.thestorychanges.com/',
              youtube: '',
              itunes: '',
              twitter: 'https://twitter.com/theStoryChanges?lang=en',
              short_description: null,
              image: {
                full:
                  '//s3-us-west-2.amazonaws.com/releasewaveweb/artists/images/000/000/017/original/The-Story-Changes-band-2016.jpg?1553546568',
                thumb:
                  '//s3-us-west-2.amazonaws.com/releasewaveweb/artists/images/000/000/017/thumb/The-Story-Changes-band-2016.jpg?1553546568',
                square:
                  '//s3-us-west-2.amazonaws.com/releasewaveweb/artists/images/000/000/017/square/The-Story-Changes-band-2016.jpg?1553546568',
                large:
                  '//s3-us-west-2.amazonaws.com/releasewaveweb/artists/images/000/000/017/large/The-Story-Changes-band-2016.jpg?1553546568',
              },
            },
          ],
          embeds: [
            {
              id: 77,
              content:
                '<iframe width="560" height="315" src="https://www.youtube.com/embed/3CcVxzXPeTY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
              created_at: '2019-03-26T00:50:39.755Z',
              updated_at: '2019-03-26T00:50:39.755Z',
            },
            {
              id: 78,
              content: '',
              created_at: '2019-03-26T00:50:39.767Z',
              updated_at: '2019-03-26T00:50:39.767Z',
            },
          ],
        },
      ],
      '05': [
        {
          id: 20,
          artist_id: null,
          name: 'Age of Unreason',
          description:
            '<p>Acclaimed Los Angeles, CA punk rock band Bad Religion will release its 17th studio album on May 3, 2019 on Epitaph Records. The album was co-produced by Carlos de la Garza. The single "Chaos From Within" from the forthcoming album can be heard below.</p>\n',
          release_date: '2019-05-03',
          created_at: '2019-03-28T01:28:21.315Z',
          updated_at: '2019-03-28T01:31:41.299Z',
          image_file_name: 'BAD_R.jpg',
          image_content_type: 'image/jpeg',
          image_file_size: 154678,
          image_updated_at: '2019-03-28T01:28:20.587Z',
          slug: 'age-of-unreason',
          buy: 'https://badreligion.ffm.to/ageofunreason',
          short_description:
            '<p><span style="color: rgb(33,37,41);background-color: rgb(254,254,254);font-size: 16px;font-family: proxima-nova, aktiv-grotesk, -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji;">Acclaimed Los Angeles, CA punk rock band Bad Religion will release its 17th studio album on May 3, 2019 on Epitaph Records. The album was co-produced by Carlos de la Garza. The single "Chaos From Within" from the forthcoming album can be heard below.</span></p>\n',
          featured: false,
          image: {
            full:
              '//s3-us-west-2.amazonaws.com/releasewaveweb/releases/images/000/000/020/original/BAD_R.jpg?1553736500',
            thumb:
              '//s3-us-west-2.amazonaws.com/releasewaveweb/releases/images/000/000/020/thumb/BAD_R.jpg?1553736500',
            square:
              '//s3-us-west-2.amazonaws.com/releasewaveweb/releases/images/000/000/020/square/BAD_R.jpg?1553736500',
            large:
              '//s3-us-west-2.amazonaws.com/releasewaveweb/releases/images/000/000/020/large/BAD_R.jpg?1553736500',
          },
          artists: [
            {
              id: 20,
              name: 'Bad Religion',
              bandcamp: '',
              facebook: 'https://www.facebook.com/badreligion',
              spotify: 'https://open.spotify.com/artist/2yJwXpWAQOOl5XFzbCxLs9',
              soundcloud: 'https://soundcloud.com/thebrpage',
              created_at: '2019-03-28T01:17:56.371Z',
              updated_at: '2019-03-28T01:17:56.371Z',
              image_file_name: 'BR.png',
              image_content_type: 'image/jpeg',
              image_file_size: 114617,
              image_updated_at: '2019-03-28T01:17:55.796Z',
              slug: 'bad-religion',
              website: 'http://www.badreligion.com/',
              youtube: '',
              itunes: '',
              twitter: 'https://twitter.com/badreligion',
              short_description: null,
              image: {
                full:
                  '//s3-us-west-2.amazonaws.com/releasewaveweb/artists/images/000/000/020/original/BR.png?1553735875',
                thumb:
                  '//s3-us-west-2.amazonaws.com/releasewaveweb/artists/images/000/000/020/thumb/BR.png?1553735875',
                square:
                  '//s3-us-west-2.amazonaws.com/releasewaveweb/artists/images/000/000/020/square/BR.png?1553735875',
                large:
                  '//s3-us-west-2.amazonaws.com/releasewaveweb/artists/images/000/000/020/large/BR.png?1553735875',
              },
            },
          ],
          embeds: [
            {
              id: 95,
              content:
                '<iframe width="560" height="315" src="https://www.youtube.com/embed/clI_8HnCGVo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
              created_at: '2019-03-28T01:31:41.346Z',
              updated_at: '2019-03-28T01:31:41.346Z',
            },
          ],
        },
        {
          id: 1,
          artist_id: null,
          name: 'Problems',
          description:
            '<p>Last year, ’90s golden era emo heroes the Get Up Kids returned with the Kicker EP, their first new music in seven years. And today, they’ve announced a new album called Problems, their first full-length since 2011’s There Are Rules. They recorded the LP with the Grammy Award-winning Kurt Vile/the National producer Peter Katis, and today, they’re sharing a music video for its anthemic lead single “Satellite.”</p>\n',
          release_date: '2019-05-15',
          created_at: '2019-03-20T03:05:15.630Z',
          updated_at: '2019-03-24T21:39:36.911Z',
          image_file_name: 'getupkids-problems.jpg',
          image_content_type: 'image/jpeg',
          image_file_size: 366536,
          image_updated_at: '2019-03-20T03:05:14.819Z',
          slug: 'problems',
          buy: '',
          short_description: '',
          featured: true,
          image: {
            full:
              '//s3-us-west-2.amazonaws.com/releasewaveweb/releases/images/000/000/001/original/getupkids-problems.jpg?1553051114',
            thumb:
              '//s3-us-west-2.amazonaws.com/releasewaveweb/releases/images/000/000/001/thumb/getupkids-problems.jpg?1553051114',
            square:
              '//s3-us-west-2.amazonaws.com/releasewaveweb/releases/images/000/000/001/square/getupkids-problems.jpg?1553051114',
            large:
              '//s3-us-west-2.amazonaws.com/releasewaveweb/releases/images/000/000/001/large/getupkids-problems.jpg?1553051114',
          },
          artists: [
            {
              id: 1,
              name: 'The Get Up Kids',
              bandcamp: '',
              facebook: 'https://www.facebook.com/TheGetUpKids/',
              spotify: 'https://open.spotify.com/artist/54Bjxn26WsjfslQbNVtSCm',
              soundcloud: '',
              created_at: '2019-03-20T02:18:24.040Z',
              updated_at: '2019-03-20T02:18:24.040Z',
              image_file_name: 'the-get-up-kids-2018-cr-Dalton-Paley-billboard-1548.jpg',
              image_content_type: 'image/jpeg',
              image_file_size: 479368,
              image_updated_at: '2019-03-20T02:18:23.381Z',
              slug: 'the-get-up-kids',
              website: null,
              youtube: null,
              itunes: null,
              twitter: null,
              short_description: null,
              image: {
                full:
                  '//s3-us-west-2.amazonaws.com/releasewaveweb/artists/images/000/000/001/original/the-get-up-kids-2018-cr-Dalton-Paley-billboard-1548.jpg?1553048303',
                thumb:
                  '//s3-us-west-2.amazonaws.com/releasewaveweb/artists/images/000/000/001/thumb/the-get-up-kids-2018-cr-Dalton-Paley-billboard-1548.jpg?1553048303',
                square:
                  '//s3-us-west-2.amazonaws.com/releasewaveweb/artists/images/000/000/001/square/the-get-up-kids-2018-cr-Dalton-Paley-billboard-1548.jpg?1553048303',
                large:
                  '//s3-us-west-2.amazonaws.com/releasewaveweb/artists/images/000/000/001/large/the-get-up-kids-2018-cr-Dalton-Paley-billboard-1548.jpg?1553048303',
              },
            },
          ],
          embeds: [
            {
              id: 57,
              content:
                '<iframe width="560" height="315" src="https://www.youtube.com/embed/n6zluCkD1mE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
              created_at: '2019-03-24T21:39:37.005Z',
              updated_at: '2019-03-24T21:39:37.005Z',
            },
          ],
        },
        {
          id: 7,
          artist_id: null,
          name: 'Nothing Stays',
          description:
            'Nothing Stays is the new LP from the Baltimore pop/rock/emo heroes Wnder.',
          release_date: '2019-05-17',
          created_at: '2019-03-20T03:36:17.332Z',
          updated_at: '2019-03-20T03:36:17.332Z',
          image_file_name: 'nothing-stays.jpg',
          image_content_type: 'image/jpeg',
          image_file_size: 220012,
          image_updated_at: '2019-03-20T03:36:16.446Z',
          slug: 'nothing-stays',
          buy: null,
          short_description: null,
          featured: null,
          image: {
            full:
              '//s3-us-west-2.amazonaws.com/releasewaveweb/releases/images/000/000/007/original/nothing-stays.jpg?1553052976',
            thumb:
              '//s3-us-west-2.amazonaws.com/releasewaveweb/releases/images/000/000/007/thumb/nothing-stays.jpg?1553052976',
            square:
              '//s3-us-west-2.amazonaws.com/releasewaveweb/releases/images/000/000/007/square/nothing-stays.jpg?1553052976',
            large:
              '//s3-us-west-2.amazonaws.com/releasewaveweb/releases/images/000/000/007/large/nothing-stays.jpg?1553052976',
          },
          artists: [
            {
              id: 3,
              name: 'Wvnder',
              bandcamp: '',
              facebook: 'https://www.facebook.com/WVNDERband/',
              spotify: '',
              soundcloud: 'https://wvnder.bandcamp.com/',
              created_at: '2019-03-20T03:10:26.858Z',
              updated_at: '2019-03-20T03:10:26.858Z',
              image_file_name: 'w4nder.jpg',
              image_content_type: 'image/jpeg',
              image_file_size: 126886,
              image_updated_at: '2019-03-20T03:10:26.275Z',
              slug: 'wvnder',
              website: null,
              youtube: null,
              itunes: null,
              twitter: null,
              short_description: null,
              image: {
                full:
                  '//s3-us-west-2.amazonaws.com/releasewaveweb/artists/images/000/000/003/original/w4nder.jpg?1553051426',
                thumb:
                  '//s3-us-west-2.amazonaws.com/releasewaveweb/artists/images/000/000/003/thumb/w4nder.jpg?1553051426',
                square:
                  '//s3-us-west-2.amazonaws.com/releasewaveweb/artists/images/000/000/003/square/w4nder.jpg?1553051426',
                large:
                  '//s3-us-west-2.amazonaws.com/releasewaveweb/artists/images/000/000/003/large/w4nder.jpg?1553051426',
              },
            },
          ],
          embeds: [
            {
              id: 7,
              content:
                '<iframe width="560" height="315" src="https://www.youtube.com/embed/90pRlgTj8yQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
              created_at: '2019-03-20T03:36:18.025Z',
              updated_at: '2019-03-20T03:36:18.025Z',
            },
          ],
        },
        {
          id: 19,
          artist_id: null,
          name: 'I Am Easy To Find',
          description:
            '<p>The National have finished recording the follow-up to their Grammy-winning 2017 album, Sleep Well Beast. The band’s longtime producer Peter Katis finished mixing the record earlier this month, as reported by his management company Worlds End.</p>\n<p>Katis has worked with The National on nearly all of their albums, specifically 2003’s Sad Songs for Dirty Lovers, 2004’s Cherry Tree EP, 2005’s Alligator, 2007’s Boxer, 2010’s High Violet, 2013’s Trouble Will Find Me, and 2017’s Sleep Well Beast.</p>\n',
          release_date: '2019-05-17',
          created_at: '2019-03-28T01:12:14.034Z',
          updated_at: '2019-03-28T01:12:14.034Z',
          image_file_name: 'national-i-am-easy-to-find.jpg',
          image_content_type: 'image/jpeg',
          image_file_size: 73234,
          image_updated_at: '2019-03-28T01:12:13.502Z',
          slug: 'i-am-easy-to-find',
          buy:
            'https://www.googleadservices.com/pagead/aclk?sa=L&ai=DChcSEwitiP7g06PhAhXd_-MHHTPXB7oYABABGgJ5bQ&ae=1&ohost=www.google.com&cid=CAESP-D296K-LJ2V6XDnF36lck1FcW3sEVMhNWVGGtmSEZlDzyz0wq-Kr4lWnlVbYgzPo8Gqh_Rrdeo2e8neDadGJQ&sig=AOD64_1gFyMxgKvG5FnCFpu2J3mlDaT9eA&ctype=5&q=&ved=0ahUKEwiD9-_g06PhAhUFnKwKHW3eDqcQ9A4ItAE&adurl=https://roughtrade.com/us/music/the-national-i-am-easy-to-find%3Fchannable%3De64967.MjQ1NTM0%26gclid%3DCjwKCAjwvuzkBRAhEiwA9E3FUpg1kzdi5puYjy22io0b4bNV_ofrmjJ_PnhgXQgV3JaB8oS4_ErlGxoCaxgQAvD_BwE',
          short_description: '',
          featured: false,
          image: {
            full:
              '//s3-us-west-2.amazonaws.com/releasewaveweb/releases/images/000/000/019/original/national-i-am-easy-to-find.jpg?1553735533',
            thumb:
              '//s3-us-west-2.amazonaws.com/releasewaveweb/releases/images/000/000/019/thumb/national-i-am-easy-to-find.jpg?1553735533',
            square:
              '//s3-us-west-2.amazonaws.com/releasewaveweb/releases/images/000/000/019/square/national-i-am-easy-to-find.jpg?1553735533',
            large:
              '//s3-us-west-2.amazonaws.com/releasewaveweb/releases/images/000/000/019/large/national-i-am-easy-to-find.jpg?1553735533',
          },
          artists: [
            {
              id: 4,
              name: 'The National',
              bandcamp: 'https://thenational.bandcamp.com/',
              facebook: 'https://www.facebook.com/thenationalofficial/',
              spotify:
                'https://open.spotify.com/artist/2cCUtGK9sDU2EoElnk0GNB?autoplay=true&v=A',
              soundcloud: 'https://soundcloud.com/the-national-official',
              created_at: '2019-03-20T03:12:02.214Z',
              updated_at: '2019-03-28T01:08:33.935Z',
              image_file_name: 'thenational.jpg',
              image_content_type: 'image/jpeg',
              image_file_size: 403129,
              image_updated_at: '2019-03-20T03:12:01.516Z',
              slug: 'the-national',
              website: 'https://americanmary.com/',
              youtube: 'https://www.youtube.com/channel/UCeiRyLo_Q9q4tlv9aaQJF5w',
              itunes: 'https://itunes.apple.com/us/artist/the-national/51075707',
              twitter: 'https://twitter.com/thenational?lang=en',
              short_description: null,
              image: {
                full:
                  '//s3-us-west-2.amazonaws.com/releasewaveweb/artists/images/000/000/004/original/thenational.jpg?1553051521',
                thumb:
                  '//s3-us-west-2.amazonaws.com/releasewaveweb/artists/images/000/000/004/thumb/thenational.jpg?1553051521',
                square:
                  '//s3-us-west-2.amazonaws.com/releasewaveweb/artists/images/000/000/004/square/thenational.jpg?1553051521',
                large:
                  '//s3-us-west-2.amazonaws.com/releasewaveweb/artists/images/000/000/004/large/thenational.jpg?1553051521',
              },
            },
          ],
          embeds: [
            {
              id: 92,
              content:
                '<iframe width="560" height="315" src="https://www.youtube.com/embed/M2Uow9aNCRU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
              created_at: '2019-03-28T01:12:15.058Z',
              updated_at: '2019-03-28T01:12:15.058Z',
            },
          ],
        },
      ],
      '06': [
        {
          id: 21,
          artist_id: null,
          name: 'Scream Through The Walls',
          description:
            '<p><span style="color: rgb(33,37,41);background-color: rgb(254,254,254);font-size: 16px;font-family: proxima-nova, aktiv-grotesk, -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji;">Louisiana post-hardcore outfit As Cities Burn return with their first album in 10 years titled "Scream Through The Walls", due out June 7th, 2019 on Equal Vision Records. The new album not only marks the end of a decate-long absence, but it is also the first album featuring the Bonnette brothers collaborating since the release of their 2005 seminal debut LP "Son, I Loved You At Your Darkest".  Below you can hear their new single "Chains" off the forthcoming LP. </span></p>\n',
          release_date: '2019-06-07',
          created_at: '2019-04-04T15:18:24.008Z',
          updated_at: '2019-04-04T15:38:33.286Z',
          image_file_name: 'As-Cities-Burn-Scream-Through-Walls.jpg',
          image_content_type: 'image/jpeg',
          image_file_size: 58908,
          image_updated_at: '2019-04-04T15:24:39.182Z',
          slug: 'scream-through-the-walls',
          buy:
            'https://ascitiesburn.lnk.to/scream?fbclid=IwAR1h13tjf_7LfC8TRtXKDoSIsyDVJblw-p2gnaea6SCBT069ZQ1BD25WS7U',
          short_description:
            '<p>Louisiana post-hardcore outfit As Cities Burn return with their first album in 10 years titled "Scream Through The Walls", due out June 7th, 2019 on Equal Vision Records. The new album not only marks the end of a decate-long absence, but it is also the first album featuring the Bonnette brothers collaborating since the release of their 2005 seminal debut LP "Son, I Loved You At Your Darkest".  Below you can hear their brand new single "Chains" off the forthcoming LP along with the previously released single "2020 AD".&nbsp;</p>\n',
          featured: false,
          image: {
            full:
              '//s3-us-west-2.amazonaws.com/releasewaveweb/releases/images/000/000/021/original/As-Cities-Burn-Scream-Through-Walls.jpg?1554391479',
            thumb:
              '//s3-us-west-2.amazonaws.com/releasewaveweb/releases/images/000/000/021/thumb/As-Cities-Burn-Scream-Through-Walls.jpg?1554391479',
            square:
              '//s3-us-west-2.amazonaws.com/releasewaveweb/releases/images/000/000/021/square/As-Cities-Burn-Scream-Through-Walls.jpg?1554391479',
            large:
              '//s3-us-west-2.amazonaws.com/releasewaveweb/releases/images/000/000/021/large/As-Cities-Burn-Scream-Through-Walls.jpg?1554391479',
          },
          artists: [
            {
              id: 21,
              name: 'As Cities Burn',
              bandcamp: '',
              facebook: 'https://www.facebook.com/ascitiesburn/',
              spotify: 'https://open.spotify.com/artist/7eJA8CZoXCETi9axIfBFGT',
              soundcloud: '',
              created_at: '2019-04-04T15:13:34.574Z',
              updated_at: '2019-04-04T15:13:34.574Z',
              image_file_name: 'AS_Cities.jpeg',
              image_content_type: 'image/jpeg',
              image_file_size: 16384,
              image_updated_at: '2019-04-04T15:13:34.051Z',
              slug: 'as-cities-burn',
              website: 'http://www.ascitiesburn.net/',
              youtube: '',
              itunes: 'https://itunes.apple.com/us/artist/as-cities-burn/66329417',
              twitter: 'https://twitter.com/acbband?lang=en',
              short_description: null,
              image: {
                full:
                  '//s3-us-west-2.amazonaws.com/releasewaveweb/artists/images/000/000/021/original/AS_Cities.jpeg?1554390814',
                thumb:
                  '//s3-us-west-2.amazonaws.com/releasewaveweb/artists/images/000/000/021/thumb/AS_Cities.jpeg?1554390814',
                square:
                  '//s3-us-west-2.amazonaws.com/releasewaveweb/artists/images/000/000/021/square/AS_Cities.jpeg?1554390814',
                large:
                  '//s3-us-west-2.amazonaws.com/releasewaveweb/artists/images/000/000/021/large/AS_Cities.jpeg?1554390814',
              },
            },
          ],
          embeds: [
            {
              id: 103,
              content:
                '<iframe width="560" height="315" src="https://www.youtube.com/embed/s94eafa7mRE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
              created_at: '2019-04-04T15:38:33.346Z',
              updated_at: '2019-04-04T15:38:33.346Z',
            },
            {
              id: 104,
              content:
                '<iframe width="560" height="315" src="https://www.youtube.com/embed/OHy5Xo8ftRc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
              created_at: '2019-04-04T15:38:33.359Z',
              updated_at: '2019-04-04T15:38:33.359Z',
            },
          ],
        },
      ],
    },
    headers: {
      'content-type': 'application/json; charset=utf-8',
      'cache-control': 'max-age=0, private, must-revalidate',
    },
    per_page: 20,
    total_entries: 21,
    current_page: 2,
  },
  user: {
    isLoading: false,
    serverError: null,
    headers: {
      'access-token': 'ACCESSTOKEN',
      expiry: 'EXPIRY',
      uid: 'hello@andrewmart.in',
      'token-type': 'Bearer',
      client: 'CLIENT',
      'content-type': 'application/json; charset=utf-8',
      'cache-control': 'max-age=0, private, must-revalidate',
    },
    id: 1,
    email: 'hello@andrewmart.in',
    provider: 'email',
    image_file_name: 'andrewmartin-looking-left.jpg',
    image_content_type: 'image/jpeg',
    uid: 'hello@andrewmart.in',
    allow_password_change: false,
    name: 'Andrew Martin',
    nickname: null,
    is_admin: true,
    image_file_size: 348622,
    image_updated_at: '2019-03-20T03:06:12.303Z',
  },
  review: {
    isLoading: false,
    serverError: false,
    items: [],
  },
  router: {
    location: {
      pathname: '/',
      query: {},
    },
    action: 'POP',
  },
  notifs: [],
  burgerMenu: {
    isOpen: false,
  },
  _persist: {
    version: -1,
    rehydrated: true,
  },
};

export default store;