'use strict'

function Controller()
{
	var model;
	var view;
	var speler1,speler2;

	this.configure = configure;
	
	function configure()
	{
		model = new VierOpEenRij();
		view = new ViewBeheerder(reageerKlikOpSpeelveld, reageerKlikOpStart, reageerKlikOpNieuwSpel, reageerKlikOpStoppen);
		speler1=new Speler(true,"ROOD");
		speler2=new Speler(false,"GEEL");
		view.toonStartscherm();
	}
	
	function reageerKlikOpNieuwSpel()
	{
		model.reset();
		var fiches = model.getFiches();
		view.toonFiches(fiches);
		
		if(speler1.benIkAanBeurt())
		{
			view.toonMededeling(speler1.getNaam() + " is aan de beurt");
		}
		else
		{
			view.toonMededeling(speler2.getNaam() + " is aan de beurt");
		}
		
		model.maakSpelActief();
		view.verbergNavigatie();
	}
	
	
	function reageerKlikOpStoppen()
	{
		
		view.toonStartscherm();
		view.resetNamen();
	}
	
	function reageerKlikOpStart(event)
	{
		model.reset();
		
		//update view
		var fiches = model.getFiches();
		view.toonFiches(fiches);
		
		speler1.resetScore();
		speler2.resetScore();
		
		var naam1=view.getNaamSpeler1();
		var naam2=view.getNaamSpeler2();
		
		if(naam1!=naam2 && naam1!="" && naam2 !="")
		{
			speler1.setNaam(naam1);
			speler2.setNaam(naam2);
		
		
		
			view.toonSpeelveldscherm();
			view.verbergNavigatie();
			view.toonSpelers(speler1,speler2);
			
			if(speler1.benIkAanBeurt())
			{
				view.toonMededeling(speler1.getNaam() + " is aan de beurt");
			}
			else
			{
				view.toonMededeling(speler2.getNaam() + " is aan de beurt");
			}
			
			model.maakSpelActief();
		}
	}
	
	function reageerKlikOpSpeelveld(event)
	{
		var actieveSpeler,passieveSpeler;
		if (model.isSpelActief())
		{
			var kolomNummer = view.getGeklikteKolom(event);
			
			if(speler1.benIkAanBeurt()===true)
			{
				actieveSpeler=speler1;
				passieveSpeler=speler2;
			}
			else
			{
				passieveSpeler=speler1;
				actieveSpeler=speler2;
			}
			
			
			var hetMag = model.magZet(kolomNummer,actieveSpeler.getKleur());
			if(hetMag===true)
			{
				var winnaar= model.isWinnaar(actieveSpeler.getKleur());
				if(winnaar===true)
				{	
					actieveSpeler.verhoogScore();
					view.toonMededeling(actieveSpeler.getNaam()+" heeft gewonnen!!!");
							
					view.toonSpelers(speler1,speler2);
					view.toonNavigatie();
				}
				
				var gelijkspel=model.isGelijkspel();
				if(gelijkspel==true)
				{
					view.toonMededeling("gelijkspel!");
					view.toonNavigatie();
				}
				//update view
				var fiches = model.getFiches();
				view.toonFiches(fiches);
							
				speler1.wisselBeurt();
				speler2.wisselBeurt();
				
				if (model.isSpelActief())
				{
					view.toonMededeling(passieveSpeler.getNaam() + " is aan de beurt");
				}
			}
			else
			{
				view.toonMededeling(actieveSpeler.getNaam() + " ,de kolom is vol");
			}	
		}
	}
}