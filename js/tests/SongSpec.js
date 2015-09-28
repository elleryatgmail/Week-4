define(['Song'], function(Song){

  describe('Song', function(){
    describe('Song title', function(){
      it('should be capitalized', function(){
        // because I want to know if it's called, not actually call it
		var song = new Song('Test1');
        expect(song.title.charAt(0)).toBe(song.title.charAt(0).toUpperCase())
      });

    });

  });


});
