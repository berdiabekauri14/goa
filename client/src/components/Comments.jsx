import { useContext, useState } from "react";
import { CommentContext } from "../context/Comments.context";

export default function Comments() {
    const { comments, addComment } = useContext(CommentContext) || {};
    const [comment, setComment] = useState("");
    const [result, setResult] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (comment.trim()) {
            try {
                await addComment({ text: comment })

                setResult(comment);
                setComment("");
            } catch (err) {
                setResult("Failed to add comment.");
                console.log(`Error: ${err}`)
            }
        }
    };

    return (
        <div className="m-3">
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="comment"
                    placeholder="Create a comment"
                    value={comment}
                    onChange={e => setComment(e.target.value)}
                    autoComplete="off"
                />
                <br />
                <button type="submit">
                    Submit
                </button>
            </form>
            {result !== null && (
                <div>
                    <strong>Result:</strong> {result}
                </div>
            )}
            {Array.isArray(comments) && comments.length > 0 && (
                <div>
                    <h3>Comments:</h3>
                    <ul>
                        {comments.map((c, idx) => (
                            <li key={idx}>{c.text || c}</li> 
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}