/* eslint-disable no-plusplus */
// NOTE: replace 'xJquRfBog9O2FNiapKIFAkK02d12' with your Firebase auth user id (can be taken from Firebase)
export function seedDatabase(firebase) {
    // const users = [
    //   {
    //     userId: 'xJquRfBog9O2FNiapKIFAkK02d12',
    //     username: 'Vu',
    //     fullName: 'Tài Vũ',
    //     emailAddress: 'taivx.1312@gmail.com',
    //     following: ['2'],
    //     followers: ['2', '3', '4'],
    //     dateCreated: Date.now()
    //   }
    //   //  {
    //   //   userId: '2',
    //   //   username: 'th_honghong',
    //   //   fullName: 'Trần Hông Hồng',
    //   //   emailAddress: 'hong@gmail.com',
    //   //   following: [xJquRfBog9O2FNiapKIFAkK02d12],
    //   //   followers: ['xJquRfBog9O2FNiapKIFAkK02d12'],
    //   //   dateCreated: Date.now()
    //   // }
    //   // {
    //   //   userId: '3',
    //   //   username: 'dali',
    //   //   fullName: 'Salvador Dalí',
    //   //   emailAddress: 'salvador@dali.com',
    //   //   following: [],
    //   //   followers: ['xJquRfBog9O2FNiapKIFAkK02d12'],
    //   //   dateCreated: Date.now()
    //   // },
    //   // {
    //   //   userId: '4',
    //   //   username: 'orwell',
    //   //   fullName: 'George Orwell',
    //   //   emailAddress: 'george@orwell.com',
    //   //   following: [],
    //   //   followers: ['xJquRfBog9O2FNiapKIFAkK02d12'],
    //   //   dateCreated: Date.now()
    //   // }
    // ];
  
    // // eslint-disable-next-line prefer-const
    // for (let k = 0; k < users.length; k++) {
    //   firebase.firestore().collection('users').add(users[k]);
    // }
  
    // eslint-disable-next-line prefer-const
    for (let i = 1; i <= 1; ++i) {
      firebase
        .firestore()
        .collection('photos')
        .add({
          photoId: i,
          userId: 'xJquRfBog9O2FNiapKIFAkK02d12',
          imageSrc: `/images/users/th_taivu/${i}.jpg`,
          caption: 'Beautiful <3',
          likes: [],
          comments: [
            {
              displayName: 'dali',
              comment: 'Love this place!'
            },
            {
              displayName: 'orwell',
              comment: 'Would you mind if I used this picture?'
            }
          ],
          userLatitude: '40.7128°',
          userLongitude: '74.0060°',
          dateCreated: Date.now()
        });
    }
  }