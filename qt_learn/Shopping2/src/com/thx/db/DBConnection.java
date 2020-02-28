package com.thx.db;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class DBConnection {

	private final String Driver = "com.mysql.jdbc.Driver";

	private final String URL = "jdbc:mysql://localhost:3306/shopping?characterEncoding=utf8&useSSL=true";

	private final String USER = "root";

	private final String PASSWORD = "123456";

	private Connection conn = null;
	//连接
	public DBConnection() throws SQLException {
		try {
			Class.forName(Driver);
		} catch (ClassNotFoundException e) {
			e.printStackTrace();
		}
		this.conn = DriverManager.getConnection(URL, USER, PASSWORD);
	}
	//返回连接
	public Connection getConnection() {
		return conn;
	}
	//关闭
	public void close() {
		if (this.conn != null) {
			try {
				this.conn.close();
			} catch (SQLException e) {
				e.printStackTrace();
			}
		}
	}
}
