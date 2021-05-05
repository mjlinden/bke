

export default class Speler
{

	constructor(sAanBeurt,sSymbool) {
		this.aanBeurt=sAanBeurt;
		this.score=0;
		this.symbool=sSymbool;
	}


	resetScore()
	{
		this.score=0;
	}
		
	getName()
	{
		return this.naam;
	}
	
	setName(sNaam)
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
	
	getSymbool()
	{
		return this.symbool;
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
	