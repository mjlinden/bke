

export default class ViewBeheerder
{
	constructor(vakjeKlikHandler, startKlikHandler, nieuwspelKlikHandler, stoppenKlikHandler) {
		this.vakjesDivs = document.querySelectorAll('#speelveld>div');
		document.querySelector('#speelveld').onclick = vakjeKlikHandler;
		document.querySelector('#startknop').onclick = startKlikHandler;
		document.querySelectorAll('nav>button')[0].onclick = nieuwspelKlikHandler;
		document.querySelectorAll('nav>button')[1].onclick = stoppenKlikHandler;
	}

	static resetNamen()
	{
		document.querySelector('#naam1').value="";
		document.querySelector('#naam2').value="";
	
	}
	
	static getNaamSpeler1()
	{
		return document.querySelector('#naam1').value;
	}
	
	static getNaamSpeler2()
	{
		return document.querySelector('#naam2').value;
	}
	
	static toonSpelers(speler1, speler2)
	{
		var eigenschapdivs1=document.querySelectorAll('#speler1>div');
		eigenschapdivs1[0].innerHTML=speler1.getNaam();
		eigenschapdivs1[1].style.backgroundImage="url('images/spel/"+speler1.getKleur()+".jpg')";
		eigenschapdivs1[2].innerHTML=speler1.getScore();
	
		var eigenschapdivs2=document.querySelectorAll('#speler2>div');
		eigenschapdivs2[0].innerHTML=speler2.getNaam();
		eigenschapdivs2[1].style.backgroundImage="url('images/spel/"+speler2.getKleur()+".jpg')";
		eigenschapdivs2[2].innerHTML=speler2.getScore();
	}
	
	static toonSpeelveldscherm()
	{
		document.querySelector('#speelveldscherm').style.display="block";
		document.querySelector('#startscherm').style.display="none";
	}
	
	static toonStartscherm()
	{
		document.querySelector('#speelveldscherm').style.display="none";
		document.querySelector('#startscherm').style.display="block";
	}
	
	static toonMededeling(mededeling)
	{
		var mededelingDiv=document.querySelector('#mededeling');
		mededelingDiv.innerHTML=mededeling;
	}
	
	getGeklikteKolom(event)
	{
		var bron = event.target;
		for(var i=0; i<vakjesDivs.length; i++)
		{
			if(this.vakjesDivs[i]===bron)
			{
				return i%3;
			}
		}
		return -1;	
	}

	getGeklikteRij(event)
	{
		var bron = event.target;
		for(var i=0; i<vakjesDivs.length; i++)
		{
			if(this.vakjesDivs[i]===bron)
			{
				return i/3;
			}
		}
		return -1;
	}
	static toonNavigatie()
	{
		document.querySelector('nav').style.visibility="visible";
		
	}
		
	static verbergNavigatie()
	{
		document.querySelector('nav').style.visibility="hidden";
	}
	
	toonFiches(fiches)
	{
		for(let rij=0; rij<3; rij++)
		{
			for (let kolom=0; kolom<3; kolom++)
			{
				const positie = rij * 7 + kolom;
				vakjesDivs[positie].style.backgroundImage="url('images/spel/"+fiches[rij][kolom]+".jpg')";
			}
		}
	}
}