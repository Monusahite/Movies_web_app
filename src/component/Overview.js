import { Component } from "react";
import { json } from "react-router-dom";

class Overview extends Component {
    constructor() {
        super();
    }
    getcolor = (rating) => {
        if (rating >= 8)
            return "green";
        else if (rating > 5)
            return "orange";
        else
            return "red";
    }

    render() {
        const genreId = { 28: "Action", 12: "Adventure", 16: "Animation", 53: "Thriller", 35: "Comedy", 80: "Crime", 99: "Documentary", 18: "Drama", 10751: "Family", 14: "Fantasy" }
        const lang ={ bi: "Bislama" ,cs: "Czech",ba: "Bashkir",ae: "Avestan",av: "Avaric",de: "German",mt: "Maltese",om: "Oromo" ,rm: "Raeto-Romance" ,so: "Somali",ts: "Tsonga" ,vi: "Vie",gn: "Guarani" ,ig: "Igbo" ,it: "Italian",ki: "Kikuyu" ,ku: "Kurdish" ,la: "Latin",ln: "Lingala" ,lb: "Letzeburgesch" ,ny: "Chichewa" ,pl: "Polish",si: "Sinhalese",to: "Tonga" ,az: "Azerbaijani",ce: "Chechen" ,cu: "Slavic" ,da: "Danish",hz: "Herero" ,ie: "Interlingue" ,rw: "Kinyarwanda",mi: "Maori" ,no: "Norwegian",pi: "Pali",sk: "Slovak",se: "Northern Sami" ,sm: "Samoan" ,uk: "Ukrainian",en: "English",ay: "Aymara" ,ca: "Catalan",eo: "Esperanto",ha: "Hausa",ho: "Hiri Motu" ,hu: "Hungarian",io: "Ido" ,ii: "Yi" ,kn: "Kannada",kv: "Komi" ,li: "Limburgish" ,oj: "Ojibwa" ,ru: "Russian",sr: "Serbian",sv: "Swedish",ty: "Tahitian" ,zu: "Zulu",ka: "Georgian",ch: "Chamorro",be: "Belarusian",br: "Breton" ,kw: "Cornish" ,fi: "Finnish",sh: "Serbo-Croatian" ,nn: "Norwegian Nynorsk" ,tt: "Tatar" ,tg: "Tajik" ,vo: "Volapük" ,ps: "Pushto",mk: "Macedonian" ,fr: "French",bm: "Bambara",eu: "Basque",fj: "Fijian" ,id: "Indonesian",mg: "Malagasy" ,na: "Nauru" ,xx: "No Language",qu: "Quechua" ,sq: "Albanian",ti: "Tigrinya" ,tw: "Twi" ,wa: "Walloon" ,ab: "Abkhazian" ,bs: "Bosnian",af: "Afrikaans",an: "Aragonese" ,fy: "Frisian" ,gu: "Gujarati" ,ik: "Inupiaq" ,ja: "Japanese",ko: "Korean",lg: "Ganda" ,nl: "Dutch",os: "Ossetian; Ossetic" ,el: "Greek",bn: "Bengali",cr: "Cree" ,km: "Khmer" ,lo: "Lao" ,nd: "Ndebele" ,ne: "Nepali" ,sc: "Sardinian" ,sw: "Swahili",tl: "Tagalog" ,ur: "Urdu",ee: "Ewe",aa: "Afar" ,co: "Corsican" ,et: "Estonian",is: "Icelandic",ks: "Kashmiri" ,kr: "Kanuri" ,ky: "Kirghiz",kj: "Kuanyama" ,nr: "Ndebele" ,or: "Oriya" ,wo: "Wolof",za: "Zhuang" ,ar: "Arabic",cv: "Chuvash" ,fo: "Faroese" ,hr: "Croatian",ms: "Malay",nb: "Norwegian Bokmål",rn: "Rundi",sn: "Shona" ,st: "Sotho" ,tr: "Turkish",am: "Amharic" ,fa: "Persian",hy: "Armenian" ,pa: "Punjabi",as: "Assamese" ,ia: "Interlingua" ,lv: "Latvian",lu: "Luba-Katanga" ,mr: "Marathi" ,mn: "Mongolian" ,pt: "Portuguese",th: "Thai",tk: "Turkmen" ,ve: "Venda" ,dv: "Divehi" ,gv: "Manx" ,kl: "Kalaallisut" ,kk: "Kazakh",lt: "Lithuanian",my: "Burmese" ,sl: "Slovenian",sd: "Sindhi" ,cn: "Cantonese",hi: "Hindi",cy: "Welsh",ht: "Haitian; Haitian Creole" ,iu: "Inuktitut" ,jv: "Javanese" ,mh: "Marshall" ,sa: "Sanskrit" ,ss: "Swati" ,te: "Telugu",kg: "Kongo" ,ml: "Malayalam" ,uz: "Uzbek",sg: "Sango" ,xh: "Xhosa" ,es: "Spanish",su: "Sundanese" ,ug: "Uighur" ,yi: "Yiddish" ,yo: "Yoruba",zh: "Mandarin",he: "Hebrew",bo: "Tibetan" ,ak: "Akan" ,mo: "Moldavian" ,ng: "Ndonga" ,dz: "Dzongkha" ,ff: "Fulah",gd: "Gaelic" ,ga: "IrishGaeilge",gl: "Galician",nv: "Navajo" ,oc: "Occitan" ,ro: "Romanian",ta: "Tamil",tn: "Tswana" ,bg: "Bulgarian"}
        
        let movieObj = JSON.parse(localStorage.getItem('movie-overview'));
        // console.log(JSON.parse(localStorage.getItem('movie-overview')));
        // console.log(movieObj);
        return (

            <>

                <div className="overview-card">

                    <div className="overview-img">
                        <img src={`https://image.tmdb.org/t/p/original/${movieObj.poster_path}`} className="overview-movie-img" alt="..." />
                    </div>
                    <div className="overview-text">
                        <h1 className="overview-title">{movieObj.original_title}<span className="light">({movieObj.release_date.substring(0, 4)})</span><h5 className="overview-date">Released Date :{movieObj.release_date}</h5></h1>
                
                        <div className="overview">
                               <h3>Overview:</h3>
                               <h5>{movieObj.overview}</h5>
                        </div>

                        <h4>Category :
                          <span  style={{padding:'0.5rem'}}  className="card-text" >{genreId[movieObj.genre_ids[0]]}</span>
                        </h4>
                        <h4>Rating :
                          <span  style={{padding:'0.5rem'}}  className={`card-text ${this.getcolor(movieObj.vote_average)}`}>{movieObj.vote_average}</span>
                        </h4>
                        <h4>Language :
                              <span  style={{padding:'0.5rem'}}>{lang[movieObj.original_language]}</span>
                        </h4>

                    </div>
                    
                </div>
                   
            </>
        )
    }
}

export default Overview;