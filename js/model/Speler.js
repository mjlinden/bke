'use strict'

function Speler(sAanBeurt,sKleur)
{
	var naam;
	var aanBeurt;
	var kleur;
	var score;

	
	this.getNaam=getNaam;
	this.setNaam=setNaam;
	this.getScore = getScore;
	this.verhoogScore=verhoogScore;
	this.getKleur = getKleur;
	this.wisselBeurt=wisselBeurt;
	this.benIkAanBeurt= benIkAanBeurt;
	this.resetScore=resetScore;

		//*********************initialisatie bij aanroepen constructor*****************************************
		aanBeurt=sAanBeurt;
		kleur=sKleur;
		score=0;
		//***********************einde initialisatie***********************************************************
	
	function resetScore()
	{
		score=0;
	}
		
	function getNaam()
	{
		return naam;
	}
	
	function setNaam(sNaam)
	{
		naam=sNaam;
	}
	
	function getScore()
	{
		return score;
	}
	
	function verhoogScore()
	{
		score++;
	}
	
	function getKleur()
	{
		return kleur;
	}
	
	function wisselBeurt()
	{
		if(aanBeurt===true)
		{
			aanBeurt=false;
		}
		else
		{
			aanBeurt=true;
		}
	}
	
	function benIkAanBeurt()
	{
		return aanBeurt;
	}
}
	