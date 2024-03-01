export default function ContactMe() {
  return (
    <div>
      <form action="https://api.web3forms.com/submit" method="POST">
        <input type="hidden" name="access_key" value="b5f7f479-b8c9-472a-b052-28af33ace587" />
        <input type="text" name="name" required />
        <input type="email" name="email" required />
        <textarea name="message" required></textarea>
        <input
          type="hidden"
          name="redirect"
          value="https://web3forms.com/success"
        />
        <button type="submit">Submit Form</button>
      </form>
    </div>
  )
}
