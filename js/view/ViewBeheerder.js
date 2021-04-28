'use strict'

function ViewBeheerder(vakjeKlikHandler, startKlikHandler, nieuwspelKlikHandler, stoppenKlikHandler)
{
	var vakjesDivs;
	
	
	this.toonFiches = toonFiches;
	this.getGeklikteKolom = getGeklikteKolom;
	this.toonMededeling = toonMededeling;
	this.toonSpeelveldscherm=toonSpeelveldscherm;
	this.toonStartscherm=toonStartscherm;
	this.getNaamSpeler1=getNaamSpeler1;
	this.getNaamSpeler2=getNaamSpeler2;
	this.toonSpelers=toonSpelers;
	this.toonNavigatie=toonNavigatie;
	this.verbergNavigatie=verbergNavigatie;
	this.resetNamen=resetNamen;

	
	//************************************initialisatie bij aanroepen constructor *********************************
	vakjesDivs = document.querySelectorAll('#speelveld>div');
	document.querySelector('#speelveld').onclick = vakjeKlikHandler;
	document.querySelector('#startknop').onclick = startKlikHandler;
	document.querySelectorAll('nav>button')[0].onclick = nieuwspelKlikHandler;
	document.querySelectorAll('nav>button')[1].onclick = stoppenKlikHandler;
	//***************************************einde initialisatie **************************************************
	
	function resetNamen()
	{
		document.querySelector('#naam1').value="";
		document.querySelector('#naam2').value="";
	
	}
	
	function getNaamSpeler1()
	{
		return document.querySelector('#naam1').value;
	}
	
	function getNaamSpeler2()
	{
		return document.querySelector('#naam2').value;
	}
	
	function toonSpelers(speler1,speler2)
	{
		var eigenschapdivs=document.querySelectorAll('#speler1>div');
		eigenschapdivs[0].innerHTML=speler1.getNaam();
		eigenschapdivs[1].style.backgroundImage="url('images/spel/"+speler1.getKleur()+".jpg')";
		eigenschapdivs[2].innerHTML=speler1.getScore();
	
		var eigenschapdivs=document.querySelectorAll('#speler2>div');
		eigenschapdivs[0].innerHTML=speler2.getNaam();
		eigenschapdivs[1].style.backgroundImage="url('images/spel/"+speler2.getKleur()+".jpg')";
		eigenschapdivs[2].innerHTML=speler2.getScore();
	}
	
	function toonSpeelveldscherm()
	{
		document.querySelector('#speelveldscherm').style.display="block";
		document.querySelector('#startscherm').style.display="none";
	}
	
	function toonStartscherm()
	{
		document.querySelector('#speelveldscherm').style.display="none";
		document.querySelector('#startscherm').style.display="block";
	}
	
	function toonMededeling(mededeling)
	{
		var mededelingDiv=document.querySelector('#mededeling');
		mededelingDiv.innerHTML=mededeling;
	}
	
	function getGeklikteKolom(event)
	{
		var bron = event.target;
		for(var i=0; i<vakjesDivs.length; i++)
		{
			if(vakjesDivs[i]===bron)
			{
				return i%7;
			}
		}
		return -1;	
	}
	
	function toonNavigatie()
	{
		document.querySelector('nav').style.visibility="visible";
		
	}
		
	function verbergNavigatie()
	{
		document.querySelector('nav').style.visibility="hidden";
	}
	
	function toonFiches(fiches)
	{
		for( var rij=0; rij<6; rij++)
		{
			for (var kolom=0; kolom<7; kolom++)
			{
				var positie=rij*7+kolom;
				vakjesDivs[positie].style.backgroundImage="url('images/spel/"+fiches[rij][kolom]+".jpg')";
			}
		}
	}
}