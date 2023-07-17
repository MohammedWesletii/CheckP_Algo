function checkpointalgo(x) {
    let l = x.length;
    let nbrmots = x.split(' ').length;
    let nbrvoy = (x.match(/[aeiou]/gi) || []).length;

    return {
      long: l,
      nbrm: nbrmots,
      nbrv: nbrvoy
    };
  }