

export default class Speler
{

	constructor(sAanBeurt,sKleur) {
		this.aanBeurt=sAanBeurt;
		this.kleur=sKleur;
		this.score=0;
	}


	resetScore()
	{
		this.score=0;
	}
		
	getNaam()
	{
		return this.naam;
	}
	
	setNaam(sNaam)
	{
		this.naam=sNaam;
	}
	
	getScore()
	{
		return this.score;
	}
	
	verhoogScore()
	{
		this.score++;
	}
	
	getKleur()
	{
		return this.kleur;
	}
	
	wisselBeurt()
	{
		if(this.aanBeurt===true)
		{
			this.aanBeurt=false;
		}
		else
		{
			this.aanBeurt=true;
		}
	}
	
	benIkAanBeurt()
	{
		return this.aanBeurt;
	}
}
	