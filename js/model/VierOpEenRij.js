'use strict'

function VierOpEenRij()
{
	var vakjes;//LEEG, GEEL, ROOD
	var spelActief;
	
	this.getFiches = getFiches;
	this.magZet = magZet;
	this.isWinnaar=isWinnaar;
	this.isGelijkspel=isGelijkspel;
	this.maakSpelActief=maakSpelActief;
	
	this.isSpelActief=isSpelActief;
	this.reset=reset;

		//*********************initialisatie bij aanroepen constructor*****************************************
		vakjes= new Array(6);
		spelActief=false;
		
		for( var i=0; i<6; i++)
		{
			vakjes[i]=new Array(7);
		}
		reset();
		//***********************einde initialisatie***********************************************************

	function maakSpelActief()
	{
		spelActief=true;
	}
	
	function isSpelActief()
	{
		return spelActief;
	}
	
	function isGelijkspel()
	{
		var gelijk=true;
		for(var rij=0;rij<6;rij++)
		{	
			for (var kolom = 0; kolom <7; kolom++) 
			{
				if (vakjes[rij][kolom]=="LEEG") 
				{
					gelijk=false;
				}
			}
		}
		
		if(gelijk==true)
		{
			spelActief=false;
		}	
		
		return gelijk;
	}
	
	function isWinnaar( kleur) 
	{
		var winnaar=false;
		
		/////////////////////Controle Horizontaal/////////////////////////
		for(var rij=0;rij<6;rij++)
		{	
			for (var kolom = 0; kolom <= 3; kolom++) 
			{
				if ((vakjes[rij][kolom] == kleur && vakjes[rij][kolom + 1] == kleur && vakjes[rij][kolom + 2] == kleur && vakjes[rij][kolom + 3]) == kleur) 
				{
					vakjes[rij][kolom]="GROEN";
					vakjes[rij][kolom+1]= "GROEN";
					vakjes[rij][kolom+2]="GROEN";
					vakjes[rij][kolom+3]="GROEN";
					spelActief=false;
					winnaar = true;
				}
			}
		}
		
		/////////////////////Controle Verticaal///////////////////////////
		for(var kolom=0;kolom<7;kolom++)
		{	
			for (var rij = 0; rij <= 2; rij++) 
			{
				if ((vakjes[rij][kolom] == kleur && vakjes[rij+1][kolom] == kleur && vakjes[rij+2][kolom] == kleur && vakjes[rij+3][kolom]) == kleur) 
				{
					vakjes[rij][kolom]="GROEN";
					vakjes[rij+1][kolom]= "GROEN";
					vakjes[rij+2][kolom]="GROEN";
					vakjes[rij+3][kolom]="GROEN";
					spelActief=false;
					winnaar = true;
				}
			}
		}
		
		
		///////////////////////Controle Diagonaal (hoog naar laag)/////////
		
		for (var kolom = 0; kolom <= 3; kolom++) 
		{
			for (var rij = 0; rij <= 2; rij++) 
			{
				if (vakjes[rij][kolom] == kleur && vakjes[rij + 1][kolom + 1] == kleur && vakjes[rij + 2][kolom + 2] == kleur && vakjes[rij + 3][kolom + 3] == kleur) 
				{
					vakjes[rij][kolom]="GROEN";
					vakjes[rij + 1][kolom + 1]="GROEN";
					vakjes[rij + 2][kolom + 2]="GROEN";
					vakjes[rij + 3][kolom + 3]="GROEN";
					spelActief=false;
					winnaar = true;
				}
			}
		}
		
		///////////////////////Controle Diagonaal (laag naar hoog)//////////
		
		for (var kolom = 0; kolom <= 3; kolom++) 
		{
			for (var rij = 5; rij >= 3; rij--) 
			{
				if (vakjes[rij][kolom] == kleur && vakjes[rij - 1][kolom + 1] == kleur && vakjes[rij - 2][kolom + 2] == kleur && vakjes[rij - 3][kolom + 3] == kleur) 
				{
					vakjes[rij][kolom]="GROEN";
					vakjes[rij - 1][kolom + 1]="GROEN";
					vakjes[rij - 2][kolom + 2]="GROEN";
					vakjes[rij - 3][kolom + 3]="GROEN";
					spelActief=false;
					winnaar = true;
				}
			}
		}
		
		/////////////////////////////////////////////////////////////////////
		
		
		return winnaar;
	}
	
	function reset()
	{
		for( var rij=0; rij<6; rij++)
		{
			for (var kolom=0; kolom<7; kolom++)
			{
				vakjes[rij][kolom]="LEEG";
			}
		}
	}
	
	function getFiches()
	{
		return vakjes;
	}
	
	function magZet(kolom,kleur)
	{
		for(var rij = 5; rij>=0; rij--)
		{
			if(vakjes[rij][kolom]==="LEEG")
			{
				vakjes [rij][kolom]= kleur;
				return true;
			}
		}
		return false;
	}
	
}