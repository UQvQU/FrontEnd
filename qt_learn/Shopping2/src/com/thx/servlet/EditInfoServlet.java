package com.thx.servlet;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import com.thx.dao.UserDao;
import com.thx.factory.*;

@WebServlet("/com/thx/servlet/EditInfoServlet")
public class EditInfoServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		this.doPost(request, response);
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		response.setContentType("text/html");

		HttpSession session = request.getSession();

		String uid = String.valueOf(session.getAttribute("uid"));
		System.out.println("uid:"+uid);

		String email = request.getParameter("Email");
		String passwd = request.getParameter("Password");

		UserDao userDao;
		try {
			userDao = DaoFactory.getUserServiceInstance();
			System.out.println("yes");
			if (userDao.editEmail(Integer.parseInt(uid), email)
					&& userDao.editPasswd(Integer.parseInt(uid), passwd)) {
				System.out.println(userDao.editEmail(Integer.parseInt(uid), email)+"   "+userDao.editPasswd(Integer.parseInt(uid), passwd));
				response.sendRedirect(request.getContextPath() + "/"+ "jsp/showMessage.jsp");
				return;
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		PrintWriter out = response.getWriter();
		out.println("<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\">");
		out.println("<HTML>");
		out.println("  <HEAD><TITLE>A Servlet</TITLE></HEAD>");
		out.println("  <BODY>");
		out.println("修改个人信息失败,邮箱地址已使用");
		out.println("  </BODY>");
		out.println("</HTML>");
		out.flush();
		out.close();
	}

}
