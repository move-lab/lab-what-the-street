exports.getAllGuesses = (request, response) => {
  const collection = request.db
    .collection('guesses')
    .aggregate([{ $sample: { size: 500 } }])
    .toArray((error, items) => {
      if (!items) {
        response.json([]);
        db.close();
      } else {
        const result = items.map(item => item.guess);
        const d = {};
        const out = [];

        for (let i = 0; i < result.length; i += 1) {
          const item = result[i];
          const rep = item.toString();

          if (!d[rep]) {
            d[rep] = true;
            out.push(item);
          }
        }

        response.json(out.map(item => ({ car: item[0], bike: item[1], rail: item[2] })));
        db.close();
      }
    });
};

exports.insertGuess = (request, response) => {
  const collection = request.db.collection('guesses');
  let savedValue = {};
  if (request.body.guess) {
    savedValue = [request.body.guess.car, request.body.guess.bike, request.body.guess.rail];
  } else {
    response.json({ message: 'incorrect format' });
    db.close();
  }

  var clientIP = request.headers['x-forwarded-for'] || request.connection.remoteAddress;

  collection.insertOne(
    {
      guess: savedValue,
      clientIP: clientIP
    },
    (error, result) => {
      if (error) {
        response.json({ message: 'faild saved', error });
        db.close();
      }
      response.json({ message: 'sucsessfull saved', result });
      db.close();
    }
  );
};
