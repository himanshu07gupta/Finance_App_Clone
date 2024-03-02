export function Inputcom ({text,placeholdertext}){
    return <div>
        <input type="text" placeholder={placeholdertext} /> <br />
        {text}
    </div>
}