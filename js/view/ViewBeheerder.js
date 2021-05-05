

export default class ViewBeheerder
{
	constructor(vakjeKlikHandler, startKlikHandler, nieuwspelKlikHandler, stoppenKlikHandler) {
		this.vakjesDivs = document.querySelectorAll('#speelveld>div');
		document.querySelector('#speelveld').onclick = vakjeKlikHandler;
		document.querySelector('#startknop').onclick = startKlikHandler;
		document.querySelectorAll('nav>button')[0].onclick = nieuwspelKlikHandler;
		document.querySelectorAll('nav>button')[1].onclick = stoppenKlikHandler;
	}

	resetNamen()
	{
		document.querySelector('#naam1').value="";
		document.querySelector('#naam2').value="";
	
	}
	
	getNaamSpeler1()
	{
		return document.querySelector('#naam1').value;
	}
	
	getNaamSpeler2()
	{
		return document.querySelector('#naam2').value;
	}
	
	toonSpelers(speler1, speler2)
	{
		let eigenschapdivs1=document.querySelectorAll('#speler1>div');
		eigenschapdivs1[0].innerHTML=speler1.getName();
		eigenschapdivs1[1].style.backgroundImage="url('images/spel/"+speler1.getSymbool()+".png')";
		eigenschapdivs1[2].innerHTML=speler1.getScore();
	
		let eigenschapdivs2=document.querySelectorAll('#speler2>div');
		eigenschapdivs2[0].innerHTML=speler2.getName();
		eigenschapdivs2[1].style.backgroundImage="url('images/spel/"+speler2.getSymbool()+".png')";
		eigenschapdivs2[2].innerHTML=speler2.getScore();


	}
	
	toonSpeelveldscherm()
	{
		document.querySelector('#speelveldscherm').style.display="block";
		document.querySelector('#startscherm').style.display="none";
	}
	
	toonStartscherm()
	{
		document.querySelector('#speelveldscherm').style.display="none";
		document.querySelector('#startscherm').style.display="block";
		this.toonMededeling("welkom bij het spel vier op een rij lite");
	}
	
	toonMededeling(mededeling)
	{
		const mededelingDivs=document.querySelectorAll('.mededeling');
		mededelingDivs.forEach(function (val, index, theArray) {
           mededelingDivs[index].innerHTML=mededeling;
        })
	}
	
	getGeklikteKolom(event)
	{
		let bron = event.target;
		for(let i=0; i<this.vakjesDivs.length; i++)
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
		let bron = event.target;
		for(let i=0; i<this.vakjesDivs.length; i++)
		{
			if(this.vakjesDivs[i]===bron)
			{
				return Math.floor(i/3);
			}
		}
		return -1;
	}
	toonNavigatie()
	{
		document.querySelector('nav').style.visibility="visible";
		
	}
		
	verbergNavigatie()
	{
		document.querySelector('nav').style.visibility="hidden";
	}
	
	toonFiches(fiches)
	{
		for(let rij=0; rij<3; rij++)
		{
			for (let kolom=0; kolom<3; kolom++)
			{
				const positie = rij * 3 + kolom;
				if(fiches[rij][kolom]==='kruis' ||fiches[rij][kolom]==='rondje' )
					this.vakjesDivs[positie].style.backgroundImage="url('images/spel/"+fiches[rij][kolom]+".png')";
				if(fiches[rij][kolom]==="LEEG")
                    this.vakjesDivs[positie].style.backgroundImage="url('images/spel/"+fiches[rij][kolom]+".jpg')";
				if(fiches[rij][kolom]==="GROEN") {
                    this.vakjesDivs[positie].style.backgroundImage="url('images/spel/"+fiches[rij][kolom]+".jpg')";
				}

			}
		}
	}
}