/* eslint-disable testing-library/no-node-access */

import { fireEvent, render, screen } from "@testing-library/react"
import Card from "./Card"
import CardProps from "./Card.type"

describe('Card',() => {
    const cardProps:CardProps = {
        title:"maCarte",
        body: "lorem ipsum",
        footer:"monFooter",
        buttonLabel:"monBouton"
    }
    it('doit fournir un rendu', () => {
        render(<Card title={cardProps.title} body={cardProps.body} />)
        const card = screen.getByText("maCarte");
        expect(card).toBeInTheDocument();
    })
    it('doit afficher le titre dans une section avec class card-title', () => {
        render(<Card title={cardProps.title} body={cardProps.body} />)
        const card = document.getElementsByClassName("card-title")[0];
        expect(card.textContent).toBe(cardProps.title);
    })
    it('doit afficher le body dans une section avec class card-body', () => {
        render(<Card title={cardProps.title} body={cardProps.body} />)
        const element = document.getElementsByClassName("card-body")[0];
        expect(element.textContent).toBe(cardProps.body);
    })
    it('doit afficher le body dans une section avec class card-footer', () => {
        render(<Card title={cardProps.title} body={cardProps.body} footer={cardProps.footer}/>)
        const element = document.getElementsByClassName("card-footer")[0];
        expect(element.textContent).toBe(cardProps.footer);
    })
    it('doit afficher le body dans une section avec class card-footer', () => {
        render(<Card title={cardProps.title} body={cardProps.body} footer={cardProps.footer}/>)
        const element = document.getElementsByClassName("card-footer")[0];
        expect(element.textContent).toBe(cardProps.footer);
    })

    it("ne doit pas afficher le footer je n'ai pas de props footer", () => {
        render(<Card title={cardProps.title} body={cardProps.body} />);
        const element = document.getElementsByClassName("card-footer")[0];
        expect(element).toBeUndefined();
    })
    it("doit avoir un bouton avec un label quand je mets la props",() => {
        render(<Card title={cardProps.title} body={cardProps.body} buttonLabel={cardProps.buttonLabel}/>)
        const element = screen.getByText(cardProps.buttonLabel as string);
        expect(element).toBeInTheDocument();
    })
    it("ne doit pas afficher le bouton quand je n'ai pas la props buttonLabel",() => {
        render(<Card title={cardProps.title} body={cardProps.body} />)
        const element = document.getElementsByTagName("button")[0];
        expect(element).toBeUndefined();
    })
    it("doit appeler l'action du bouton quand on clique dessus", () =>{
        // fonction espion
        const handleClick = jest.fn();
        render(<Card title={cardProps.title} body={cardProps.body} buttonLabel={cardProps.buttonLabel} buttonAction={handleClick} />)
        const button = document.querySelector('button');

        // Cliquer sur le bouton 
        fireEvent.click(button!);

        // Verifier que la fonction déclencher par le clique est appelée
        expect(handleClick).toHaveBeenCalled();


    })

})