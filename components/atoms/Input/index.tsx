interface InputProps {
    label: string,
    id: string,
    name: string,
    placeholder?: string,
    type: 'text' | 'email' | 'password' | 'tel',

}
export default function Input(props: InputProps) {
    const { label, id, name, placeholder, type, ...nativeProps } = props;
    return (
        <>
            <label htmlFor={id} className="form-label text-lg fw-medium color-palette-1 mb-10">
                {label}
            </label>
            <input type={type} className="form-control rounded-pill text-lg" id={id} name={name}
                aria-describedby="name" placeholder={placeholder} {...nativeProps} />
        </>
    )
}
