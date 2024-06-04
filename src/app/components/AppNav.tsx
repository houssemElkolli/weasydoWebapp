import Link from "next/link";
import { appPATH, fakestoreapiPATH } from "../utils/path";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";

const AppNav = async () => {
    const session = await getServerSession(authOptions);
    let data: string[] = [];
    try {
        const res = await fetch(fakestoreapiPATH + "/products/categories");
        if (res.ok) {
            data = await res.json();
            console.log(data);
        }
    } catch (error) {
        console.log(error);
    }

    return (
        <nav className="nav">
            <div className="container">
                <Link href={appPATH} className="logo">
                    <span style={{ color: "var(--primary-green)" }}>Easy</span>
                    <span style={{ color: "var(--primary-yellow)" }}>
                        Do
                    </span>{" "}
                    <sub className="sub_text">E-COMMERCE</sub>
                </Link>
                <div className="links_dropdown hide">
                    {" "}
                    <span>Links</span>
                    <ul className="links_dropdown-content">
                        <Link
                            href={appPATH}
                            style={{
                                letterSpacing: "2px",
                            }}
                        >
                            Home
                        </Link>
                        <div className="dropdown">
                            <span>Categories</span>
                            <ul className="dropdown-content">
                                {data.length > 0
                                    ? data.map((category) => (
                                          <Link
                                              key={category}
                                              href={
                                                  appPATH +
                                                  "/products?category=" +
                                                  category
                                              }
                                              prefetch={true}
                                          >
                                              {category}
                                          </Link>
                                      ))
                                    : "No Categories"}
                            </ul>
                        </div>
                        <Link
                            href={appPATH + "/products"}
                            style={{
                                letterSpacing: "2px",
                            }}
                        >
                            Products
                        </Link>
                        {session?.user && (
                            <Link
                                href={appPATH + "/dashboard/products"}
                                style={{
                                    letterSpacing: "2px",
                                }}
                            >
                                Dashboard
                            </Link>
                        )}
                    </ul>
                </div>
                <div className="nav_links">
                    <Link
                        href={appPATH}
                        style={{
                            letterSpacing: "2px",
                        }}
                    >
                        Home
                    </Link>
                    <div className="dropdown">
                        <span>Categories</span>
                        <ul className="dropdown-content">
                            {data.length > 0
                                ? data.map((category) => (
                                      <Link
                                          key={category}
                                          href={
                                              appPATH +
                                              "/products?category=" +
                                              category
                                          }
                                          prefetch={true}
                                      >
                                          {category}
                                      </Link>
                                  ))
                                : "No Categories"}
                        </ul>
                    </div>
                    <Link
                        href={appPATH + "/products"}
                        style={{
                            letterSpacing: "2px",
                        }}
                    >
                        Products
                    </Link>
                    {session?.user && (
                        <Link
                            href={appPATH + "/dashboard/products"}
                            style={{
                                letterSpacing: "2px",
                            }}
                        >
                            Dashboard
                        </Link>
                    )}
                </div>
                {session?.user ? (
                    <div
                        style={{
                            display: "flex",
                            gap: "10px",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <div className="nav_username_container">
                            <span>Welcome Back </span>
                            <span>{session.user.username} </span>
                        </div>
                        <hr style={{ height: "20px" }} />
                        <Link href={"/api/auth/signout"} style={{ color: "" }}>
                            Sign Out
                        </Link>
                    </div>
                ) : (
                    <button className="base_button nav_sign_in_button">
                        <Link href={appPATH + "/signin"}> Sign In</Link>{" "}
                    </button>
                )}
            </div>
        </nav>
    );
};

export default AppNav;
