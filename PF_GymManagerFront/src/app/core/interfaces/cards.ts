export interface CardInterface {
    typeCard:     string;
    closeHeader:  boolean;
    header?:      Header;
    body:         Body;
    footer:       Footer;
}

export interface Header {
    title:       string;
    titleClass?: string;
    subTitle?:   string;
}

export interface Body {
    title?:        string;
    titleClass?:   string;
    desc:          string;
    descClass?:    string;
    subDesc?:      string;
    subDescClass?: string;
}

export interface Footer {
    footerType:   footerType;
    label?:       string;
    iconMaterial?:    string;
    footerClass?: string;
}

export enum footerType{
    typeLbl = "label",
    typeBtn = 'button'
}