// import { Request, Response } from "express";

// export const loginController = async (req: Request, res: Response) => {
//   const db = req.app.locals.db;

//   interface User {
//     id: number;
//     name: string;
//     password: string;
//     email?: string;
//     phone?: string;
//     // Add other fields if necessary
//   }

//   const { username, password } = req.body;

//   // Validate input
//   if (!username || !password) {
//     res.status(400).json({ message: "Username and password are required" });
//   }

//   try {
//     // Fetch all users from the database
//     const users: User[] = await db.all("SELECT * FROM users;");

//     // Match the username and password using Array.map and find
//     const matchedUser = users.find(
//       (user) => user.name === username && user.password === password
//     );

//     if (matchedUser) {
//       // Exclude sensitive fields like the password from the response
//       const { password, ...userWithoutPassword } = matchedUser;
//       res
//         .status(200)
//         .json({ message: "Login successful", user: userWithoutPassword });
//     } else {
//       res.status(401).json({ message: "Invalid username or password" });
//     }
//   } catch (error) {
//     console.error("Unexpected error during login:", error);
//     res.status(500).json({ error: "Unexpected server error" });
//   }
// };

// postgre SQL

import { Request, Response } from "express";

export const loginController = async (req: Request, res: Response) => {
  const db = req.app.locals.db;

  interface User {
    id: number;
    name: string;
    password: string;
    email?: string;
    phone?: string;
    // add other fields if needed
  }

  const { username, password } = req.body;

  // Validate input
  if (!username || !password) {
    res.status(400).json({ message: "Username and password are required" });
    return;
  }

  try {
    const query = "SELECT * FROM users WHERE name = $1";
    const result = await db.query(query, [username]);

    if (result.rows.length === 0) {
      // User not found
      res.status(401).json({ message: "Invalid username or password" });
      return;
    }

    const user = result.rows[0] as User;

    if (user.password !== password) {
      // Password mismatch
      res.status(401).json({ message: "Invalid username or password" });
      return;
    }

    // Exclude password from the response
    const { password: _, ...userWithoutPassword } = user;

    res.status(200).json({
      message: "Login successful",
      user: userWithoutPassword,
    });
  } catch (error) {
    console.error("Unexpected error during login:", error);
    res.status(500).json({ error: "Unexpected server error" });
  }
};



