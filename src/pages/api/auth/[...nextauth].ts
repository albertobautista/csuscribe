import NextAuth from 'next-auth';
// import jwtDecode from 'jwt-decode';

// import CredentialProvider from 'next-auth/providers/credentials';

export default NextAuth(
  {
    providers: [
      // CredentialProvider({
      //   name: 'credentials',
      //   credentials: {
      //     email: {
      //       label: 'Email',
      //       type: 'text',
      //       placeholder: 'johndoe@test.com',
      //     },
      //     password: { label: 'Password', type: 'password' },
      //   },
      //   async authorize(credentials) {
      //     const payload = {
      //       email: credentials?.email,
      //       password: credentials?.password,
      //       owner: 'IKUSI',
      //     };
      //     // console.log('authorize payload', payload);
      //     const res = await fetch('https://6hnyvqu5ca.execute-api.us-east-1.amazonaws.com/stage/user/login', {
      //       method: 'POST',
      //       body: JSON.stringify(payload),
      //       headers: {
      //         'Content-Type': 'application/json',
      //       },
      //     });
      //     // console.log('authorize res', res);
      //     const user = await res.json();
      //     const userTokenDecoded = jwtDecode(user.content.AuthenticationResult.IdToken);
      //     console.log('callbacks jwt ddd', userTokenDecoded);
      //     if (!res.ok) {
      //       throw new Error(user.exception);
      //     }
      //     if (res.ok && user) {
      //       return userTokenDecoded;
      //     }
      //     return null;
      //   },
      // }),
    ],
    callbacks: {
      // async jwt({ token, account, user }: any) {
      //   console.log('callbacks jwt token', token);
      //   console.log('callbacks jwt account', account);
      //   console.log('callbacks jwt user', user);
      //   if (user) {
      //     token.accessToken = account.access_token;
      //     token.id = 1512;
      //   }
      //   return token;
      // console.log('callbacks jwt token', token);
      // console.log('callbacks jwt user', user);
      // console.log('callbacks jwt account', account);
      // console.log('callbacks jwt profile', profile);
      // console.log('callbacks jwt isNewUser', isNewUser);
      // const ddd = jwtDecode(user.content.AuthenticationResult.IdToken);
      // console.log('callbacks jwt ddd', ddd);
      // if (account && user) {
      //   console.log('callbacks jwt IFFFFFF');
      //   return {
      //     ...token,
      //     accessToken: user.content.AuthenticationResult.AccessToken,
      //     refreshToken: user.content.AuthenticationResult.RefreshToken,
      //     idToken: user.content.AuthenticationResult.IdToken,
      //     user,
      //   };
      // }
      // return { token, user };
    },
    // async session({ session, token }) {
    //   console.log('callbacks session token', token);
    //   console.log('callbacks session session', session);

    //   if (token) {
    //     session.id = token.id;
    //   }
    //   return session;
    // },

    // async session({ session, token, user }) {
    //   console.log('callbacks session session', session);
    //   console.log('callbacks session user', user);
    //   console.log('callbacks session token', token);

    //   // console.log('callbacks session token2', token);

    //   // session.user.accessToken = token.accessToken;
    //   return session;
    // },
    // jwt: ({ token, user }) => {
    //   console.log('callbacks jwt token', token);

    //   // first time jwt callback is run, user object is available
    //   if (user) {
    //     console.log('callbacks jwt user', user);

    //     token.id = user.id;
    //   }

    //   return token;
    // },
    // session: ({ session, token }) => {
    //   console.log('callbacks session session', session);
    //   console.log('callbacks session token2', token);

    //   if (token) {
    //     session.id = token.id;
    //   }

    //   return session;
    // },
  }
  // secret: process.env.SECRET,
  // jwt: {
  //   secret: 'ALBERTO',
  // },
  // pages: {
  //   signIn: '/singin',
  // },
  // }
);
